import { Table } from "@mui/joy";
import { useContext } from "react";
import { useGetYearCategoriesByMonths } from "../../api/years-api";
import { AuthContext } from "../../contexts/auth.context";
import { formatNumber } from "../../utils/formatNumber";
import { capFirstLetter } from "../../utils/typo";
import { shortMonths } from "../arrays/months-array";
import { Loading } from "../shared/loading";

type ActivityTableProps = {
  status: "tracked" | "planned";
  year: number;
};

type YearsTypesTableProps = {
  title: string;
  data: Record<string, Record<string, number>>;
};

export const YearsTable = ({ status, year }: ActivityTableProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetYearCategoriesByMonths({ userId, status, year });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <YearsTypesTable title="Incomes" data={data.incomes} />
          <YearsTypesTable title="Expenses" data={data.expenses} />
        </>
      )}
    </>
  );
};

export const YearsTypesTable = ({ title, data }: YearsTypesTableProps) => {
  const categories = Array.from(new Set(Object.keys(data).flatMap(month => Object.keys(data[month]))));
  const totalRow: Record<string, number> = {};
  shortMonths.forEach(month => {
    totalRow[month] = categories.reduce((acc, category) => acc + (data[month]?.[category] || 0), 0);
  });

  return (
    <Table
      size="sm"
      borderAxis="none"
      variant="plain"
      hoverRow
      stickyHeader
      sx={{
        width: { xs: 900, md: "100%" },
        borderCollapse: "collapse",
        "& th": {
          height: 16,
          textAlign: "center",
          bgcolor: "neutral.300"
        },
        "& td": {
          textAlign: "center",
          fontWeight: "400"
        },
        "& th:first-of-type, & td:first-of-type": {
          textAlign: "left"
        },
        "& tr:last-child": {
          fontWeight: "700"
        }
      }}
    >
      <thead>
        <tr>
          <th style={{ width: 96, borderRadius: 0 }}>{title}</th>
          {shortMonths.map(month => (
            <th key={month} style={{ borderRadius: month === "dec" ? 0 : "" }}>
              {capFirstLetter(month)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          categories.sort().map(category => (
            <tr key={category}>
              <td>{capFirstLetter(category)}</td>
              {shortMonths.map((month, index) => (
                <td key={index}>{data[month]?.[category] ? `${formatNumber(data[month][category])}` : "-"}</td>
              ))}
            </tr>
          ))}
        <tr style={{ borderTop: "1px solid" }}>
          <td>Total</td>
          {shortMonths.map((month, index) => (
            <td key={index}>{totalRow[month] ? `${formatNumber(totalRow[month])}` : "-"}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

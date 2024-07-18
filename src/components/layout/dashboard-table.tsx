import { Table } from "@mui/joy";
import { formatNumber } from "../../utils/formatNumber";
import { capFirstLetter } from "../../utils/typo";

type DashboardTableProps = {
  type: "income" | "expense";
  data: object;
};

export const DashboardTable = ({ type, data }: DashboardTableProps) => {
  const notzero = (value: number) => {
    return value > 0 ? true : false;
  };
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
          height: 16,
          textAlign: "center",
          fontWeight: 400
        },
        "& th:first-of-type, & td:first-of-type": {
          textAlign: "left"
        }
      }}
    >
      <thead>
        <tr>
          <th style={{ borderRadius: 0 }}>{capFirstLetter(type)}</th>
          <th>Tracked</th>
          <th>Planned</th>
          <th>%</th>
          <th>Remaining</th>
          <th style={{ borderRadius: 0 }}>Excess</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([category, values]: [string, any]) => {
          const tracked = notzero(values.tracked) ? formatNumber(values.tracked) : "-";
          const planned = notzero(values.planned) ? formatNumber(values.planned) : "-";
          const percentage = notzero(values.planned) ? Math.round((values.tracked / values.planned) * 100) + "%" : "-";
          const remaining = notzero(values.planned - values.tracked)
            ? formatNumber(Math.max(0, values.planned - values.tracked))
            : "-";
          const excess = notzero(values.tracked - values.planned)
            ? formatNumber(Math.max(0, values.tracked - values.planned))
            : "-";
          return (
            <tr key={category}>
              <td>{capFirstLetter(category)}</td>
              <td>{tracked}</td>
              <td>{planned}</td>
              <td>{percentage}</td>
              <td>{remaining}</td>
              <td>{excess}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

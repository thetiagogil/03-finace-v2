import { Option, Select } from "@mui/joy";
import { useContext, useState } from "react";
import { useGetMonths, useGetYearCategorySummary, useGetYears } from "../api/years-api";
import { fullMonths, shortMonths } from "../components/arrays/months-array";
import { DashboardTable } from "../components/layout/dashboard-table";
import { AuthPageContainer } from "../components/shared/containers";
import { DataCard } from "../components/shared/data-card";
import { Flex } from "../components/shared/flex";
import { Loading } from "../components/shared/loading";
import { AuthContext } from "../contexts/auth.context";
import { capFirstLetter } from "../utils/typo";

export const DashboardPage = () => {
  const { userId } = useContext(AuthContext);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState("");
  const { data: years } = useGetYears({ userId });
  const { data: monthsWithValue } = useGetMonths({ userId, year: selectedYear });
  const { data, loading } = useGetYearCategorySummary({ userId, year: selectedYear, month: selectedMonth });
  const stylesSelect = { width: { xs: "100%", sm: 200 } };

  return (
    <AuthPageContainer>
      <DataCard sx={{ flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: "space-between" }}>
        <Flex gap2>
          <Select
            value={selectedYear}
            onChange={(_e: any, newValue: any) => setSelectedYear(newValue)}
            placeholder="Select Year"
            sx={stylesSelect}
          >
            {years?.map((year, index) => (
              <Option key={index} value={year}>
                {year}
              </Option>
            ))}
          </Select>
          <Select
            value={selectedMonth}
            onChange={(_e: any, newValue: any) => setSelectedMonth(newValue)}
            placeholder="Select Month"
            sx={stylesSelect}
          >
            <Option value="">All Year</Option>
            {shortMonths.map((shortMonth, index) => {
              const isMonthDisabled = (shortMonth: any) => {
                return !monthsWithValue.includes(shortMonth);
              };
              return (
                <Option key={index} value={shortMonth} disabled={isMonthDisabled(shortMonth)}>
                  {capFirstLetter(fullMonths[index])}
                </Option>
              );
            })}
          </Select>
        </Flex>
      </DataCard>

      <Flex x>
        {data && (Object.keys(data.incomes).length > 0 || Object.keys(data.expenses).length > 0) && (
          <DataCard width={"50%"} sx={{ gap: 4 }}>
            {loading ? (
              <Loading />
            ) : (
              <>
                {data.incomes && Object.keys(data.incomes).length > 0 && (
                  <DashboardTable type="income" data={data.incomes} />
                )}
                {data.expenses && Object.keys(data.expenses).length > 0 && (
                  <DashboardTable type="expense" data={data.expenses} />
                )}
              </>
            )}
          </DataCard>
        )}
        <DataCard width={"50%"}></DataCard>
      </Flex>
    </AuthPageContainer>
  );
};

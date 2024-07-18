import { Option, Select, Stack } from "@mui/joy";
import { useContext, useState } from "react";
import { useGetMonths, useGetYearCategorySummary, useGetYears, useGetYearTopCategories } from "../api/years-api";
import { fullMonths, shortMonths } from "../components/arrays/months-array";
import { DoughnutChart } from "../components/layout/dashboard-doughnut-chart";
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
  const { data: tableData, loading: tableLoading } = useGetYearCategorySummary({
    userId,
    year: selectedYear,
    month: selectedMonth
  });
  const { data: chartData, loading: chartLoading } = useGetYearTopCategories({
    userId,
    year: selectedYear,
    month: selectedMonth
  });
  const stylesSelect = { width: { xs: "100%", sm: 200 } };

  const isMonthDisabled = (shortMonth: string) => {
    return !monthsWithValue?.includes(shortMonth);
  };

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
            {shortMonths.map((shortMonth, index) => (
              <Option key={index} value={shortMonth} disabled={isMonthDisabled(shortMonth)}>
                {capFirstLetter(fullMonths[index])}
              </Option>
            ))}
          </Select>
        </Flex>
      </DataCard>

      {chartData && (
        <Flex fullwidth sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Flex x sx={{ width: "50%" }}>
            <DataCard sx={{ alignItems: "center", width: "100%" }}>
              {chartData.tracked?.incomes && <DoughnutChart data={chartData.tracked.incomes} title="Tracked Incomes" />}
            </DataCard>
            <DataCard sx={{ alignItems: "center", width: "100%" }}>
              {chartData.tracked?.expenses && (
                <DoughnutChart data={chartData.tracked.expenses} title="Tracked Expenses" />
              )}
            </DataCard>
          </Flex>
        </Flex>
      )}
      {tableData && (Object.keys(tableData.incomes).length > 0 || Object.keys(tableData.expenses).length > 0) && (
        <DataCard sx={{ gap: 4 }}>
          {tableLoading ? (
            <Loading />
          ) : (
            <Stack
              component="section"
              sx={{
                alignItems: { xs: "normal", md: "center" },
                overflowX: { xs: "auto", md: "visible" },
                width: "100%",
                gap: 4
              }}
            >
              {tableData.incomes && Object.keys(tableData.incomes).length > 0 && (
                <DashboardTable type="income" data={tableData.incomes} />
              )}
              {tableData.expenses && Object.keys(tableData.expenses).length > 0 && (
                <DashboardTable type="expense" data={tableData.expenses} />
              )}
            </Stack>
          )}
        </DataCard>
      )}
    </AuthPageContainer>
  );
};

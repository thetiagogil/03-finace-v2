import { useContext, useState } from "react";
import {
  useGetMonths,
  useGetYearCategorySummary,
  useGetYears,
  useGetYearTopTrackedCategories,
  useGetYearTotals
} from "../api/years-api";
import { DashboardCharts } from "../components/layout/dashboard-charts";
import { DashboardFilters } from "../components/layout/dashboard-filters";
import { DashboardGraph } from "../components/layout/dashboard-graph";
import { DashboardTables } from "../components/layout/dashboard-tables";
import { AuthPageContainer } from "../components/shared/containers";
import { DataCard } from "../components/shared/data-card";
import { Flex } from "../components/shared/flex";
import { Loading } from "../components/shared/loading";
import { AuthContext } from "../contexts/auth.context";

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
  const { data: chartData, loading: chartLoading } = useGetYearTopTrackedCategories({
    userId,
    year: selectedYear,
    month: selectedMonth
  });
  const { data: graphData, loading: graphLoading } = useGetYearTotals({
    userId,
    year: selectedYear
  });

  const isMonthDisabled = (shortMonth: string) => {
    return !monthsWithValue?.includes(shortMonth);
  };

  return (
    <AuthPageContainer>
      {tableLoading && chartLoading ? (
        <Loading size="md" />
      ) : (
        <>
          {years && years.length > 0 && (
            <DataCard sx={{ flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: "space-between" }}>
              <DashboardFilters
                years={years}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                isMonthDisabled={isMonthDisabled}
              />
            </DataCard>
          )}
          <Flex x fullwidth sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
            {graphData && graphData.length > 0 && (
              <DashboardGraph graphData={graphData} title="Yearly Totals" selectedMonth={selectedMonth} />
            )}
            {chartData &&
              (Object.keys(chartData?.incomes || {}).length > 0 ||
                Object.keys(chartData?.expenses || {}).length > 0) && (
                <DashboardCharts doughnutIncomes={chartData.incomes} doughnutExpenses={chartData.expenses} />
              )}
          </Flex>

          {tableData &&
            (Object.keys(tableData.incomes || {}).length > 0 || Object.keys(tableData.expenses || {}).length > 0) && (
              <DashboardTables dataIncomes={tableData.incomes} dataExpenses={tableData.expenses} />
            )}
        </>
      )}
    </AuthPageContainer>
  );
};

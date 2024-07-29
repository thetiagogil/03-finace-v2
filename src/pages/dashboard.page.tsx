import { Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useGetUser } from "../api/users-api";
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
  const { data: user } = useGetUser({ userId });
  const { data: tableData, loading: tableLoading } = useGetYearCategorySummary({
    userId,
    year: selectedYear,
    month: selectedMonth
  });
  const { data: graphData, loading: graphLoading } = useGetYearTotals({
    userId,
    year: selectedYear
  });
  const { data: chartData, loading: chartLoading } = useGetYearTopTrackedCategories({
    userId,
    year: selectedYear,
    month: selectedMonth
  });
  const isLoading = tableLoading || graphLoading || chartLoading;
  const isMonthDisabled = (shortMonth: string) => {
    return !monthsWithValue?.includes(shortMonth);
  };

  return (
    <AuthPageContainer>
      {isLoading ? (
        <Loading size="md" />
      ) : (
        <>
          {years && years.length > 0 && (
            <DataCard
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography level="h3">Welcome back, {user.data?.firstname}!</Typography>
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
              <DashboardGraph graphData={graphData} selectedMonth={selectedMonth} />
            )}
            {chartData && Object.keys(chartData || {}).length > 0 && <DashboardCharts data={chartData} />}
          </Flex>

          {tableData && Object.keys(tableData || {}).length > 0 && <DashboardTables data={tableData} />}
        </>
      )}
    </AuthPageContainer>
  );
};

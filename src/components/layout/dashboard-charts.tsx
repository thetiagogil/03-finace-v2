import { ChartDoughnut } from "../shared/chart-doughnut";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

type DashboardChartsProps = {
  doughnutIncomes: any;
  doughnutExpenses: any;
};

export const DashboardCharts = ({ doughnutIncomes, doughnutExpenses }: DashboardChartsProps) => {
  return (
    <Flex fullwidth sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <DataCard sx={{ width: "100%", alignItems: "center" }}>
        {doughnutIncomes && <ChartDoughnut data={doughnutIncomes} title="Tracked Incomes" />}
      </DataCard>
      <DataCard sx={{ width: "100%", alignItems: "center" }}>
        {doughnutExpenses && <ChartDoughnut data={doughnutExpenses} title="Tracked Expenses" />}
      </DataCard>
    </Flex>
  );
};

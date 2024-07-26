import { ChartDoughnut } from "../shared/chart-doughnut";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

type DashboardChartsProps = {
  data: { incomes: {}; expenses: {} };
};

export const DashboardCharts = ({ data }: DashboardChartsProps) => {
  return (
    <Flex fullwidth sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <DataCard sx={{ width: "100%", alignItems: "center" }}>
        {data?.incomes && <ChartDoughnut data={data?.incomes} title="Tracked Incomes" />}
      </DataCard>
      <DataCard sx={{ width: "100%", alignItems: "center" }}>
        {data?.expenses && <ChartDoughnut data={data?.expenses} title="Tracked Expenses" />}
      </DataCard>
    </Flex>
  );
};

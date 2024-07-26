import { ChartDoughnut } from "../shared/chart-doughnut";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

type YearsChartsProps = {
  data: { incomes: {}; expenses: {} };
};

export const YearsCharts = ({ data }: YearsChartsProps) => {
  const styleCard = { width: { md: "100%" }, alignItems: "center" };
  return (
    <Flex fullwidth sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <DataCard sx={styleCard}>
        {data?.incomes && <ChartDoughnut data={data?.incomes} title="Top Income Months" />}
      </DataCard>
      <DataCard sx={styleCard}>
        {data?.expenses && <ChartDoughnut data={data?.expenses} title="Top Expense Months" />}
      </DataCard>
    </Flex>
  );
};

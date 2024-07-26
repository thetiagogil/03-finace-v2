import { Grid, Typography } from "@mui/joy";
import { formatNumber } from "../../utils/formatNumber";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

interface YearsInfoProps {
  data: { totalIncome: number; totalExpense: number };
  year: number;
}

export const YearsInfo = ({ data, year }: YearsInfoProps) => {
  const total = data.totalIncome - data.totalExpense;
  const cardContent = [
    { title: "Total Income", value: Math.round(data?.totalIncome) },
    { title: "Total Expense", value: Math.round(data?.totalExpense) },
    { title: "Year Total", value: Math.round(total) }
  ];
  return (
    <DataCard>
      <Flex y xc gap2>
        <Typography level="h1">{year}</Typography>
        <Flex x fullwidth>
          <Grid container sx={{ width: "100%" }}>
            {cardContent.map((item, index) => (
              <Grid xs key={index}>
                <DataCard bgcolor="neutral.300">
                  <Flex y gap1>
                    <Typography level="body-sm">{item.title}</Typography>
                    <Typography level="h3">{formatNumber(item.value)}</Typography>
                  </Flex>
                </DataCard>
              </Grid>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </DataCard>
  );
};

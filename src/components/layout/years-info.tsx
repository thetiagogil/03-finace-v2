import { Grid, Typography } from "@mui/joy";
import { useContext } from "react";
import { useGetYear } from "../../api/years-api";
import { AuthContext } from "../../contexts/auth.context";
import { formatNumber } from "../../utils/formatNumber";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { Loading } from "../shared/loading";

interface YearsInfoProps {
  status: "tracked" | "planned";
  year: number;
}

export const YearsInfo = ({ year, status }: YearsInfoProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetYear({ userId, status, year });
  const total = data.totalIncome - data.totalExpense;
  const cardContent = [
    { title: "Total Income", value: Math.round(data?.totalIncome) },
    { title: "Total Expense", value: Math.round(data?.totalExpense) },
    { title: "Year Total", value: Math.round(total) }
  ];
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

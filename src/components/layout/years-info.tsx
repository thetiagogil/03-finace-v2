import { Grid, Typography } from "@mui/joy";
import { useContext } from "react";
import { useGetYearInfo } from "../../api/useYearsApi";
import { AuthContext } from "../../contexts/auth.context";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { Loading } from "../shared/loading";

interface YearsInfoProps {
  status: "tracked" | "planned";
  year: number;
}

export const YearsInfo = ({ year, status }: YearsInfoProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetYearInfo({ userId, status, year });
  const total = data.totalIncome - data.totalExpense;
  const cardContent = [
    { title: "Total Income", value: data?.totalIncome },
    { title: "Total Expense", value: data?.totalExpense },
    { title: "Year Total", value: total }
  ];
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DataCard width="100%">
          <Flex y xc gap2>
            <Typography level="h1">{year}</Typography>
            <Flex x fullwidth>
              <Grid container sx={{ width: "100%" }}>
                {cardContent.map((item, index) => (
                  <Grid xs key={index}>
                    <DataCard bgcolor="neutral.100">
                      <Flex y xc>
                        <Typography level="title-md">{item.title}</Typography>
                        <Typography level="body-md">{item.value}€</Typography>
                      </Flex>
                    </DataCard>
                  </Grid>
                ))}
              </Grid>
            </Flex>
          </Flex>
        </DataCard>
      )}
    </>
  );
};

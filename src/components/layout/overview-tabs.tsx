import { CircularProgress, Grid, Link, Typography } from "@mui/joy";
import { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { useGetYearsByUserId } from "../../api/useYearsApi";
import { AuthContext } from "../../contexts/auth.context";
import { YearModel } from "../../models/year.model";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { Loading } from "../shared/loading";

type OverviewTabsProps = {
  status: "tracked" | "planned";
};

export const OverviewTabs = ({ status }: OverviewTabsProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetYearsByUserId({ userId, status });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid container sx={{ width: "100%" }}>
          {data.map((year: YearModel, index: number) => {
            type YearKeys = "totalIncome" | "totalExpense";
            const progress = (type: YearKeys) => {
              return (year[type] / (year.totalIncome + year.totalExpense)) * 100;
            };
            const total = year.totalIncome - year.totalExpense;
            return (
              <Grid xs={6} md={3} key={index}>
                <DataCard
                  height={100}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  hoverContent={
                    <Link
                      component={ReactLink}
                      to={`/overview/${status}/${year.year}`}
                      underline="none"
                      sx={{ width: "100%", justifyContent: "center" }}
                    >
                      <Flex y gap={0.5} sx={{ width: "90%" }}>
                        <Flex x xsb fullwidth>
                          <Typography level="body-sm">Total income: {year.totalIncome}</Typography>
                          <CircularProgress
                            color="success"
                            thickness={4}
                            size="sm"
                            determinate
                            value={progress("totalIncome")}
                          />
                        </Flex>
                        <Flex x xsb fullwidth>
                          <Typography level="body-sm">Total expense: {year.totalExpense}</Typography>
                          <CircularProgress
                            color="danger"
                            thickness={4}
                            size="sm"
                            determinate
                            value={progress("totalExpense")}
                          />
                        </Flex>
                        <Typography level="body-sm">Transactions: {year.trackedCount}</Typography>
                      </Flex>
                    </Link>
                  }
                >
                  <Flex y xc gap1>
                    <Typography level="title-lg">{year.year}</Typography>
                    <Typography level="body-sm" color={total > 0 ? "success" : "danger"}>
                      {total > 0 ? "+" : "-"}
                      {Math.abs(total)}€
                    </Typography>
                  </Flex>
                </DataCard>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

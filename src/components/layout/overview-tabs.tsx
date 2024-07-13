import { CircularProgress, Grid, Link, Typography } from "@mui/joy";
import { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { useGetYearsByUserId } from "../../api/useYearsApi";
import { AuthContext } from "../../contexts/auth.context";
import { YearModel } from "../../models/year.model";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

type OverviewTabsProps = {
  status: "tracked" | "planned";
};

export const OverviewTabs = ({ status }: OverviewTabsProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetYearsByUserId({ userId, status });
  return (
    <>
      {loading ? (
        <Flex sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Flex>
      ) : (
        <Grid container sx={{ width: "100%" }}>
          {data.map((year: YearModel, index: number) => {
            type YearKeys = "totalIncome" | "totalExpense";
            const progress = (type: YearKeys) => {
              return (year[type] / (year.totalIncome + year.totalExpense)) * 100;
            };
            return (
              <Grid xs={6} md={3} key={index}>
                <DataCard
                  height={100}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  hoverContent={
                    <Link
                      component={ReactLink}
                      to={`/overview/${year}`}
                      underline="none"
                      sx={{ width: "100%", justifyContent: "center" }}
                    >
                      <Flex x gap2>
                        <Flex y gap={0.5}>
                          <Typography level="body-sm">Income: {year.totalIncome}</Typography>
                          <Typography level="body-sm">Expense: {year.totalExpense}</Typography>
                          <Typography level="body-sm">Transactions: {year.trackedCount}</Typography>
                        </Flex>
                        <Flex y gap={0.5}>
                          <CircularProgress color="success" size="sm" determinate value={progress("totalIncome")} />
                          <CircularProgress color="danger" size="sm" determinate value={progress("totalExpense")} />
                        </Flex>
                      </Flex>
                    </Link>
                  }
                >
                  <Flex>
                    <Typography level="title-lg">{year.year}</Typography>
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

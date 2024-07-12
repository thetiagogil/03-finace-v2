import { CircularProgress } from "@mui/joy";
import { useContext } from "react";
import { useGetYearsByUserId } from "../../api/useYearsApi";
import { AuthContext } from "../../contexts/auth.context";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

type OverviewTabsProps = {
  status?: "tracked" | "planned";
};

export const OverviewTabs = ({ status }: OverviewTabsProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetYearsByUserId({ userId });
  console.log(data);
  return (
    <Flex>
      {loading ? (
        <Flex x xc fullwidth>
          <CircularProgress />
        </Flex>
      ) : (
        <>
          {data.map((year: number) => {
            return <DataCard key={year}>{year}</DataCard>;
          })}
        </>
      )}
    </Flex>
  );
};

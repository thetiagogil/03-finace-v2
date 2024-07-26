import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  useGetYearCategoriesByMonths,
  useGetYearInfo,
  useGetYearMonthsTotalsSummary,
  useGetYearTopMonths
} from "../api/years-api";
import { YearsCharts } from "../components/layout/years-charts";
import { YearsGraph } from "../components/layout/years-graph";
import { YearsInfo } from "../components/layout/years-info";
import { YearsTables } from "../components/layout/years-tables";
import { AuthPageContainer } from "../components/shared/containers";
import { Flex } from "../components/shared/flex";
import { Loading } from "../components/shared/loading";
import { AuthContext } from "../contexts/auth.context";

interface Params {
  status: "tracked" | "planned";
  year: number;
}

export const YearPage = () => {
  const params = useParams() as unknown as Params;
  const { status, year } = params;
  const { userId } = useContext(AuthContext);
  const { data: infoData, loading: infoLoading } = useGetYearInfo({ userId, status, year });
  const { data: chartData, loading: chartLoading } = useGetYearTopMonths({ userId, status, year });
  const { data: graphData, loading: graphLoading } = useGetYearMonthsTotalsSummary({ userId, status, year });
  const { data: tableData, loading: tableLoading } = useGetYearCategoriesByMonths({ userId, status, year });
  return (
    <AuthPageContainer>
      {infoLoading && graphLoading && tableLoading && chartLoading ? (
        <Loading size="md" />
      ) : (
        <>
          <Flex y fullwidth>
            <YearsInfo data={infoData} year={year} />
            <Flex x fullwidth sx={{ flexDirection: { xs: "column", md: "row" } }}>
              <YearsCharts data={chartData} />
              <YearsGraph data={graphData} />
            </Flex>
          </Flex>
          <YearsTables data={tableData} />
        </>
      )}
    </AuthPageContainer>
  );
};

import { Stack } from "@mui/joy";
import { useParams } from "react-router-dom";
import { YearsInfo } from "../components/layout/years-info";
import { YearsTable } from "../components/layout/years-table";
import { AuthPageContainer } from "../components/shared/containers";
import { DataCard } from "../components/shared/data-card";
import { Flex } from "../components/shared/flex";

interface Params {
  status: "tracked" | "planned";
  year: number;
}

export const YearPage = () => {
  const params = useParams() as unknown as Params;
  const { status, year } = params;
  return (
    <AuthPageContainer>
      <Flex x fullwidth>
        <DataCard width="100%" height={200}>
          <YearsInfo year={year} status={status} />
        </DataCard>
        <DataCard width="100%"></DataCard>
      </Flex>
      <DataCard>
        <Stack
          component="section"
          sx={{
            alignItems: { xs: "normal", md: "center" },
            overflowX: { xs: "auto", md: "visible" },
            width: "100%",
            gap: 8
          }}
        >
          <YearsTable status={status} year={year} />
        </Stack>
      </DataCard>
    </AuthPageContainer>
  );
};

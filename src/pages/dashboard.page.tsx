import { AuthPageContainer } from "../components/shared/containers";
import { DataCard } from "../components/shared/data-card";
import { Flex } from "../components/shared/flex";

export const DashboardPage = () => {
  return (
    <AuthPageContainer>
      <Flex>
        <DataCard bgcolor="primary.300" width={"50%"} height={100}>
          Mock Box
        </DataCard>
        <DataCard bgcolor="primary.300" width={"50%"}>
          Mock Box
        </DataCard>
      </Flex>
      <Flex>
        <DataCard bgcolor="primary.300" width={"50%"} height={100}>
          Mock Box
        </DataCard>
        <DataCard bgcolor="primary.300" width={"50%"}>
          Mock Box
        </DataCard>
      </Flex>
      <Flex>
        <DataCard width={"50%"} height={50}>
          Mock Filter
        </DataCard>
        <DataCard width={"50%"}>Mock Filter</DataCard>
      </Flex>
      <Flex>
        <DataCard width={"100%"} height={400}>
          Mock Textarea
        </DataCard>
      </Flex>
    </AuthPageContainer>
  );
};

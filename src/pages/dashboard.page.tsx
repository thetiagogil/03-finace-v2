import { AuthPageContainer } from "../components/shared/containers";
import { DataCard } from "../components/shared/data-card";
import { Flex } from "../components/shared/flex";

export const DashboardPage = () => {
  return (
    <AuthPageContainer>
      <Flex>
        <DataCard bgcolor="primary.300" width={"50%"} height={100}>
          Total money
        </DataCard>
        <DataCard bgcolor="success.300" width={"50%"}>
          Active money
        </DataCard>
      </Flex>
      <Flex>
        <DataCard bgcolor="danger.300" width={"50%"} height={100}>
          Inactive money
        </DataCard>
        <DataCard bgcolor="neutral.300" width={"50%"}>
          Planned money
        </DataCard>
      </Flex>
      <Flex>
        <DataCard width={"50%"} height={50}>
          Filter 1
        </DataCard>
        <DataCard width={"50%"}>Filter 2</DataCard>
      </Flex>
      <Flex>
        <DataCard width={"100%"} height={400}>
          Data
        </DataCard>
      </Flex>
    </AuthPageContainer>
  );
};

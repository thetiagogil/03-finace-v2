import { Flex } from "../shared/flex";

type OverviewTabsProps = {
  status?: "tracked" | "planned";
};

export const OverviewTabs = ({ status }: OverviewTabsProps) => {
  return <Flex>Overview {status}</Flex>;
};

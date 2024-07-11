import { Flex } from "../shared/flex";
import { ActivityTable } from "./activity-table";

type ActivityTabsProps = {
  status?: "tracked" | "planned" | undefined;
};

export const ActivityTabs = ({ status }: ActivityTabsProps) => {
  return (
    <Flex>
      <ActivityTable status={status} />
    </Flex>
  );
};

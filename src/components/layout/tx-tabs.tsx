import { Flex } from "../shared/flex";
import { TxTable } from "./tx-table";

type TxTabsProps = {
  status?: "tracked" | "planned" | undefined;
};

export const TxTabs = ({ status }: TxTabsProps) => {
  return (
    <Flex>
      <TxTable status={status} />
    </Flex>
  );
};

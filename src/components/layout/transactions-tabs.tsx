import { Flex } from "../shared/flex";

type TransactionsTabsProps = {
  status?: "tracked" | "planned";
};

export const TransactionsTabs = ({ status }: TransactionsTabsProps) => {
  return <Flex>Transactions {status}</Flex>;
};

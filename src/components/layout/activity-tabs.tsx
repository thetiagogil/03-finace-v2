import { useContext } from "react";
import { useGetTxByStatus } from "../../api/tx-api";
import { AuthContext } from "../../contexts/auth.context";
import { Flex } from "../shared/flex";
import { ActivityColumn } from "./activity-column";
import { ActivityFilters } from "./activity-filters";

type ActivityTabsProps = {
  status: "tracked" | "planned";
};

export const ActivityTabs = ({ status }: ActivityTabsProps) => {
  const { userId } = useContext(AuthContext);
  const { data: transactions, loading: transactionsLoading } = useGetTxByStatus({ userId, status });

  return (
    <Flex y>
      <ActivityFilters userId={userId} status={status} />
      <ActivityColumn transactions={transactions} transactionsLoading={transactionsLoading} />
    </Flex>
  );
};

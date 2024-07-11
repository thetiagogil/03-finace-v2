import { TxTabs } from "../components/layout/tx-tabs";
import { AuthPageContainer } from "../components/shared/containers";
import { TabsStatus } from "../components/shared/tabs-status";

export const TransactionsPage = () => {
  return (
    <AuthPageContainer>
      <TabsStatus trackedTab={<TxTabs status="tracked" />} plannedTab={<TxTabs status="planned" />} />
    </AuthPageContainer>
  );
};

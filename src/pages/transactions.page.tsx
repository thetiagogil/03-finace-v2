import { TransactionsTabs } from "../components/layout/transactions-tabs";
import { AuthPageContainer } from "../components/shared/containers";
import { TabsStatus } from "../components/shared/tabs-status";

export const TransactionsPage = () => {
  return (
    <AuthPageContainer>
      <TabsStatus
        trackedTab={<TransactionsTabs status="tracked" />}
        plannedTab={<TransactionsTabs status="planned" />}
      />
    </AuthPageContainer>
  );
};

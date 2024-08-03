import { Divider, Typography } from "@mui/joy";
import { useState } from "react";
import { useDeleteTxById } from "../../api/tx-api";
import { TxModel } from "../../models/tx.model";
import { AddTxModal } from "../modals/add-tx-modal";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { Loading } from "../shared/loading";
import { ActivityItemCard } from "./activity-item-card";

type ActivityTableProps = {
  transactions: TxModel[];
  transactionsLoading: boolean;
};

export const ActivityColumn = ({ transactions, transactionsLoading }: ActivityTableProps) => {
  const { deleteTxById, loading: deleting } = useDeleteTxById();
  const [editTxModal, setEditTxModal] = useState(false);
  const [currentTx, setCurrentTx] = useState<TxModel | null>(null);

  const groupedTransactions = transactions.reduce(
    (acc, tx) => {
      const date = tx.date;
      if (!acc[date]) acc[date] = [];
      acc[date].push(tx);
      return acc;
    },
    {} as Record<string, TxModel[]>
  );

  const handleEdit = (tx: TxModel) => {
    setCurrentTx(tx);
    setEditTxModal(true);
  };

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {transactionsLoading ? (
        <Loading />
      ) : Object.keys(groupedTransactions).length === 0 ? (
        <Flex x xc>
          <Typography level="body-sm">
            <i>No data</i>
          </Typography>
        </Flex>
      ) : (
        <DataCard>
          <Flex y fullwidth gap3>
            {Object.entries(groupedTransactions).map(([date, transactionsArray]) => (
              <Flex y key={date}>
                <Typography level="body-sm">{formatDate(date)}</Typography>
                <Flex y sx={{ border: "1px solid", borderColor: "neutral.300", borderRadius: 4 }}>
                  {transactionsArray.map((tx: TxModel, index: number) => (
                    <>
                      <ActivityItemCard key={index} onClick={() => handleEdit(tx)} tx={tx} />
                      {index < transactionsArray.length - 1 && <Divider orientation="horizontal" />}
                    </>
                  ))}
                </Flex>
              </Flex>
            ))}
            {currentTx && (
              <AddTxModal
                open={editTxModal}
                onClose={() => setEditTxModal(false)}
                userId={currentTx.user_id}
                status={currentTx.status}
                editMode={true}
                initialData={currentTx}
                handleDelete={() => deleteTxById(currentTx.id)}
                deleting={deleting}
              />
            )}
          </Flex>
        </DataCard>
      )}
    </>
  );
};

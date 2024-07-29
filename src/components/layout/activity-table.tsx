import { Stack, Table, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useDeleteTxById, useGetTxByStatus } from "../../api/tx-api";
import { AuthContext } from "../../contexts/auth.context";
import { TxModel } from "../../models/tx.model";
import { formatNumber } from "../../utils/formatNumber";
import { capFirstLetter } from "../../utils/typo";
import { AddTxModal } from "../modals/add-tx-modal";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { Loading } from "../shared/loading";

type ActivityTableProps = {
  status: "tracked" | "planned";
};

export const ActivityTable = ({ status }: ActivityTableProps) => {
  const { userId } = useContext(AuthContext);
  const { data: transactions, loading: transactionsLoading } = useGetTxByStatus({ userId, status });
  const { deleteTxById, loading: deleting } = useDeleteTxById();
  const [editTxModal, setEditTxModal] = useState(false);
  const [currentTx, setCurrentTx] = useState<TxModel | null>(null);

  const handleEdit = (tx: TxModel) => {
    setCurrentTx(tx);
    setEditTxModal(true);
  };

  return (
    <>
      {transactionsLoading ? (
        <Loading />
      ) : transactions.length <= 0 ? (
        <Flex x xc>
          <Typography level="body-sm">
            <i>No data</i>
          </Typography>
        </Flex>
      ) : (
        <DataCard>
          <Stack
            component="section"
            sx={{
              alignItems: { xs: "normal", md: "center" },
              overflowX: { xs: "auto", md: "visible" },
              width: "100%"
            }}
          >
            <Table
              borderAxis="none"
              variant="plain"
              hoverRow
              stickyHeader
              sx={{
                width: { xs: 900, md: "100%" },
                borderCollapse: "collapse",
                "& th": {
                  width: 104,
                  height: 16,
                  textAlign: "center",
                  bgcolor: "neutral.300"
                },
                "& td": {
                  textAlign: "center"
                },
                "& td:nth-of-type(4)": {
                  textAlign: "right"
                },
                "& td:nth-of-type(5)": {
                  textAlign: "left"
                }
              }}
            >
              <thead>
                <tr>
                  <th style={{ borderRadius: 0 }}>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Value</th>
                  <th style={{ width: "auto", borderRadius: 0 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx: TxModel, index: number) => (
                  <tr key={index} onClick={() => handleEdit(tx)} style={{ cursor: "pointer" }}>
                    <td>{tx.date}</td>
                    <td>{capFirstLetter(tx.type)}</td>
                    <td>{capFirstLetter(tx.category)}</td>
                    <td>{formatNumber(tx.value)}</td>
                    <td>{tx.description}</td>
                  </tr>
                ))}
              </tbody>
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
            </Table>
          </Stack>
        </DataCard>
      )}
    </>
  );
};

import { Table } from "@mui/joy";
import { useState } from "react";
import { TxModel } from "../../models/tx.model";
import { capFirstLetter } from "../../utils/typo";
import { txColumnssArray } from "../arrays/tx-array";
import { AddTxModal } from "../modals/add-tx-modal";

type ActivityTableProps = {
  data: TxModel[];
  deleteTx: (txId: string | undefined) => void;
  deleting: boolean;
};

export const ActivityTable = ({ data, deleteTx, deleting }: ActivityTableProps) => {
  const [editTxModal, setEditTxModal] = useState(false);
  const [currentTx, setCurrentTx] = useState<TxModel | null>(null);

  const handleEdit = (tx: TxModel) => {
    setCurrentTx(tx);
    setEditTxModal(true);
  };

  return (
    <>
      <Table
        borderAxis="none"
        variant="plain"
        hoverRow
        stickyHeader
        stripe="even"
        sx={{
          width: { xs: 900, md: "100%" },
          borderCollapse: "collapse",
          "& th": {
            textAlign: "center",
            bgcolor: "primary.500",
            color: "neutral.50"
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
            {txColumnssArray.map((header, index) => (
              <th
                style={{
                  width:
                    header === "Date" || header === "Type" || header === "Category" || header === "Value" ? 96 : "auto"
                }}
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((tx: TxModel, index: number) => (
            <tr key={index} onClick={() => handleEdit(tx)} style={{ cursor: "pointer" }}>
              <td>{tx.date}</td>
              <td>{capFirstLetter(tx.type)}</td>
              <td>{capFirstLetter(tx.category)}</td>
              <td>{tx.value}€</td>
              <td>{tx.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {currentTx && (
        <AddTxModal
          open={editTxModal}
          onClose={() => setEditTxModal(false)}
          userId={currentTx.user_id}
          status={currentTx.status}
          editMode={true}
          initialData={currentTx}
          handleDelete={() => deleteTx(currentTx.id)}
          deleting={deleting}
        />
      )}
    </>
  );
};

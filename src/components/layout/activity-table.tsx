import { IconButton, Table } from "@mui/joy";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TxModel } from "../../models/tx.model";
import { capFirstLetter } from "../../utils/typo";
import { txColumnssArray } from "../arrays/tx-array";

type ActivityTableProps = {
  data: TxModel[];
};

export const ActivityTable = ({ data }: ActivityTableProps) => {
  return (
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
          <th style={{ width: 48 }}></th>
          <th style={{ width: 48 }}></th>
        </tr>
      </thead>
      <tbody>
        {data.map((tx: TxModel, index: number) => (
          <tr key={index}>
            <td>{tx.date}</td>
            <td>{capFirstLetter(tx.type)}</td>
            <td>{capFirstLetter(tx.category)}</td>
            <td>{tx.value}€</td>
            <td>{tx.description}</td>
            <td>
              <IconButton>
                <AiOutlineEdit />
              </IconButton>
            </td>
            <td>
              <IconButton>
                <AiOutlineDelete />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

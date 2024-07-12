import { CircularProgress, IconButton, Table, Typography } from "@mui/joy";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useGetTxByStatus } from "../../api/useTxApi";
import { capFirstLetter } from "../../utils/typo";
import { txColumnssArray } from "../arrays/tx-array";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";

type ActivityableProps = {
  userId: string;
  status: "tracked" | "planned";
};

export const ActivityTable = ({ userId, status }: ActivityableProps) => {
  const { data, loading } = useGetTxByStatus({ userId, status });
  return (
    <>
      <DataCard>
        {loading ? (
          <Flex x xc fullwidth>
            <CircularProgress />
          </Flex>
        ) : (
          <>
            {data.length > 0 ? (
              <Table
                borderAxis="none"
                variant="plain"
                hoverRow
                stripe="even"
                sx={{
                  width: "100%",
                  borderCollapse: "collapse",
                  "& th": {
                    textAlign: "center",
                    bgcolor: "primary.500",
                    color: "neutral.50"
                  },
                  "& td:nth-of-type(4)": {
                    textAlign: "right"
                  },
                  "& th:nth-of-type(6), & td:nth-of-type(6),& th:nth-of-type(7), & td:nth-of-type(7)": {
                    width: 48,
                    textAlign: "center",
                    p: 0
                  }
                }}
              >
                <thead>
                  <tr>
                    {txColumnssArray.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((tx, index: number) => (
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
            ) : (
              <Flex x xc>
                <Typography level="body-sm">
                  <i>No data</i>
                </Typography>
              </Flex>
            )}
          </>
        )}
      </DataCard>
    </>
  );
};

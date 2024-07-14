import { Button, Select, Stack, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useDeleteTxById, useGetTxByStatus } from "../../api/tx-api";
import { AuthContext } from "../../contexts/auth.context";
import { AddTxModal } from "../modals/add-tx-modal";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { Loading } from "../shared/loading";
import { ActivityTable } from "./activity-table";

type ActivityTabsProps = {
  status: "tracked" | "planned";
};

export const ActivityTabs = ({ status }: ActivityTabsProps) => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetTxByStatus({ userId, status });
  const { deleteTxById, loading: deleting } = useDeleteTxById();
  const [addTxModal, setAddTxModal] = useState(false);
  const stylesSelect = { width: { xs: "100%", sm: 200 } };
  return (
    <Flex y>
      <DataCard sx={{ flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: "space-between" }}>
        <Flex gap2>
          <Select placeholder="Mock Filter" sx={stylesSelect} />
          <Select placeholder="Mock Filter" sx={stylesSelect} />
        </Flex>
        <Flex>
          <Button onClick={() => setAddTxModal(true)} sx={{ width: { xs: "100%", sm: "auto" } }}>
            Add activity
          </Button>
          <AddTxModal open={addTxModal} onClose={() => setAddTxModal(false)} userId={userId} status={status} />
        </Flex>
      </DataCard>
      <DataCard>
        <Stack
          component="section"
          sx={{
            alignItems: { xs: "normal", md: "center" },
            overflowX: { xs: "auto", md: "visible" },
            width: "100%"
          }}
        >
          {loading ? (
            <Loading />
          ) : data.length > 0 ? (
            <ActivityTable data={data} deleteTxById={deleteTxById} deleting={deleting} />
          ) : (
            <Flex x xc>
              <Typography level="body-sm">
                <i>No data</i>
              </Typography>
            </Flex>
          )}
        </Stack>
      </DataCard>
    </Flex>
  );
};

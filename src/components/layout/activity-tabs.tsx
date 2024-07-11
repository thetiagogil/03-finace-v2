import { Button, Select } from "@mui/joy";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { AddTxModal } from "../modals/add-tx-modal";
import { DataCard } from "../shared/data-card";
import { Flex } from "../shared/flex";
import { ActivityTable } from "./activity-table";

type ActivityTabsProps = {
  status?: "tracked" | "planned";
};

export const ActivityTabs = ({ status }: ActivityTabsProps) => {
  const { userId } = useContext(AuthContext);
  const [addTxModal, setAddTxModal] = useState(false);
  return (
    <Flex y>
      <DataCard sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Flex gap2>
          <Select placeholder="Mock Filter" />
          <Select placeholder="Mock Filter" />
        </Flex>
        <Flex>
          <Button onClick={() => setAddTxModal(true)}>Add activity</Button>
          <AddTxModal open={addTxModal} onClose={() => setAddTxModal(false)} userId={userId} status={status} />
        </Flex>
      </DataCard>
      <ActivityTable status={status} />
    </Flex>
  );
};

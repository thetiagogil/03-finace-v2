import { Button, Input, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useUpdateUserWallet } from "../../api/users-api";
import { Flex } from "../shared/flex";

type EditWalletModalProps = {
  open: boolean;
  onClose: () => void;
  userId?: string;
  walletType: "initial" | "current" | "";
  walletValue: number;
};

export const EditWalletModal = ({ open, onClose, userId, walletType, walletValue }: EditWalletModalProps) => {
  const [value, setValue] = useState<number>(walletValue);
  const { updateUserWallet, loading } = useUpdateUserWallet({
    userId,
    payload: walletType === "initial" ? { wallet_initial_value: value } : { wallet_current_value: value }
  });

  useEffect(() => {
    if (open) {
      setValue(walletValue);
    }
  }, [open, walletValue]);

  const handleSaveChanges = async () => {
    await updateUserWallet();
    onClose();
    location.reload();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ width: 500 }}>
        <ModalClose />
        <Flex x>
          <Typography>Are you sure you want to change your {walletType} value?</Typography>
        </Flex>
        <Flex x gap1>
          <Input type="number" value={value || ""} onChange={e => setValue(Number(e.target.value))} />
          <Button onClick={handleSaveChanges} loading={loading}>
            Save
          </Button>
        </Flex>
      </ModalDialog>
    </Modal>
  );
};

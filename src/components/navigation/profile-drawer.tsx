import { Button, CircularProgress, Drawer, IconButton, ModalClose, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { useGetUser } from "../../api/users-api";
import { AuthContext } from "../../contexts/auth.context";
import { EditWalletModal } from "../modals/edit-wallet-modal";
import { Flex } from "../shared/flex";

type ProfileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

type WalletType = "initial" | "current" | "";

type ModalStateProps = {
  open: boolean;
  walletType: WalletType;
  walletValue: number;
};

type WalletItem = {
  type: WalletType;
  value: number;
  label: string;
};

export const ProfileDrawer = ({ open, onClose }: ProfileDrawerProps) => {
  const { userId } = useContext(AuthContext);
  const { data: userData, loading: userLoading } = useGetUser({ userId });
  const initialValue = userData.data?.wallet_initial_value ?? 0;
  const currentValue = userData.data?.wallet_current_value ?? 0;
  const [modalState, setModalState] = useState<ModalStateProps>({
    open: false,
    walletType: "initial",
    walletValue: 0
  });

  const handleOpenModal = (walletType: WalletType, walletValue: number) => {
    setModalState({ open: true, walletType, walletValue });
  };

  const handleCloseModal = () => {
    setModalState({ open: false, walletType: "", walletValue: 0 });
  };

  const wallet: WalletItem[] = [
    { type: "initial", value: initialValue, label: "Initial value" },
    { type: "current", value: currentValue, label: "Current value" }
  ];

  return (
    <Drawer open={open} onClose={onClose} anchor="right" size="sm">
      <Flex y sx={{ px: 2 }}>
        <Typography level="title-lg" sx={{ textAlign: "center", pt: 1.5, mb: 4 }}>
          Profile
        </Typography>
        <ModalClose />
        <Flex y gap={4}>
          <Flex y gap2 fullwidth>
            <Flex y yc fullheight>
              <Typography level="body-md">Name</Typography>
              {userLoading ? (
                <CircularProgress size="sm" />
              ) : (
                <Typography level="title-md">
                  {userData.data?.firstname} {userData.data?.lastname}
                </Typography>
              )}
            </Flex>
            {wallet.map(item => (
              <Flex key={item.type} y yc fullheight>
                <Typography level="body-md">{item.label}</Typography>
                <Flex x yc gap1>
                  {userLoading ? (
                    <CircularProgress size="sm" />
                  ) : (
                    <Typography level="title-md">{item.value}</Typography>
                  )}
                  <IconButton
                    size="sm"
                    onClick={() => handleOpenModal(item.type, item.value)}
                    sx={{ p: 0, "--IconButton-size": "26px" }}
                  >
                    <MdOutlineEdit />
                  </IconButton>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex>
            <Button color="danger">Delete Account</Button>
          </Flex>
        </Flex>
      </Flex>
      <EditWalletModal
        open={modalState.open}
        onClose={handleCloseModal}
        userId={userId}
        walletType={modalState.walletType}
        walletValue={modalState.walletValue}
      />
    </Drawer>
  );
};

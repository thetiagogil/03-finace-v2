import { Button, CircularProgress, Drawer, IconButton, ModalClose, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { useGetUser } from "../../api/users-api";
import { AuthContext } from "../../contexts/auth.context";
import { DeleteUserModal } from "../modals/delete-user-modal";
import { EditWalletModal } from "../modals/edit-wallet-modal";
import { Flex } from "../shared/flex";

type ProfileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

type WalletType = "initial" | "current" | "currency" | "";

type ModalStateProps = {
  open: boolean;
  walletType: WalletType;
  walletValue: number;
};

type WalletItem = {
  type: WalletType;
  value: number | string | null;
  label: string;
};

export const ProfileDrawer = ({ open, onClose }: ProfileDrawerProps) => {
  const { userId } = useContext(AuthContext);
  const { data: userData, loading: userLoading } = useGetUser({ userId });
  const initialValue = userData.data?.wallet_initial_value ?? 0;
  const currentValue = userData.data?.wallet_current_value ?? 0;
  const currency = userData.data?.currency ?? null;
  const [editModalState, setEditModalState] = useState<ModalStateProps>({
    open: false,
    walletType: "initial",
    walletValue: 0
  });
  const [deleteModalState, setDeleteModalState] = useState(false);

  const handleEditOpenModal = (walletType: WalletType, walletValue: number) => {
    setEditModalState({ open: true, walletType, walletValue });
  };

  const handleEditCloseModal = () => {
    setEditModalState({ open: false, walletType: "", walletValue: 0 });
  };

  const wallet: WalletItem[] = [
    { type: "initial", value: initialValue, label: "Initial value" },
    { type: "current", value: currentValue, label: "Current value" },
    { type: "currency", value: currency, label: "Currency" }
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
                    onClick={() => {
                      const value = item.value !== null && typeof item.value === "number" ? item.value : 0; // MAKE THIS MORE READABLE
                      handleEditOpenModal(item.type, value);
                    }}
                    sx={{ p: 0, "--IconButton-size": "26px" }}
                  >
                    <MdOutlineEdit />
                  </IconButton>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex>
            <Button color="danger" onClick={() => setDeleteModalState(true)}>
              Delete Account
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <EditWalletModal
        open={editModalState.open}
        onClose={handleEditCloseModal}
        userId={userId}
        walletType={editModalState.walletType}
        walletValue={editModalState.walletValue}
      />
      <DeleteUserModal open={deleteModalState} onClose={() => setDeleteModalState(false)} userId={userId} />
    </Drawer>
  );
};

import { CircularProgress, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useGetUser } from "../api/users-api";
import { EditWalletModal } from "../components/modals/edit-wallet-modal";
import { AuthPageContainer } from "../components/shared/containers";
import { DataCard } from "../components/shared/data-card";
import { Flex } from "../components/shared/flex";
import { AuthContext } from "../contexts/auth.context";

type WalletType = "initial" | "current" | "";

type ModalStateProps = {
  open: boolean;
  walletType: WalletType;
  walletValue: number;
};

export const SettingsPage = () => {
  const { userId } = useContext(AuthContext);
  const { data: userData, loading: userLoading } = useGetUser({ userId });
  const initialValue = userData.data?.wallet_initial_value ?? 0;
  const currentValue = userData.data?.wallet_current_value ?? 0;
  const [modalState, setModalState] = useState<ModalStateProps>({
    open: false,
    walletType: "initial",
    walletValue: 0
  });
  const style = { bgcolor: "neutral.300", width: { xs: "auto", sm: "100%" }, height: 100 };

  const handleOpenModal = (walletType: WalletType, walletValue: number) => {
    setModalState({ open: true, walletType, walletValue });
  };

  const handleCloseModal = () => {
    setModalState({ open: false, walletType: "", walletValue: 0 });
  };

  return (
    <AuthPageContainer>
      <Flex fullwidth sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <DataCard onClick={() => handleOpenModal("initial", initialValue)} sx={style}>
          <Flex y yc xc gap2 fullheight>
            <Typography level="title-md">Initial value</Typography>
            {userLoading ? <CircularProgress size="sm" /> : <Typography level="title-lg">{initialValue}</Typography>}
          </Flex>
        </DataCard>
        <DataCard onClick={() => handleOpenModal("current", currentValue)} sx={style}>
          <Flex y yc xc gap2 fullheight>
            <Typography level="title-md">Current value</Typography>
            {userLoading ? <CircularProgress size="sm" /> : <Typography level="title-lg">{currentValue}</Typography>}
          </Flex>
        </DataCard>
      </Flex>
      <EditWalletModal
        open={modalState.open}
        onClose={handleCloseModal}
        userId={userId}
        walletType={modalState.walletType}
        walletValue={modalState.walletValue}
      />
    </AuthPageContainer>
  );
};

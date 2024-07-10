import { CircularProgress, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useGetUser } from "../api/useGetUser";
import { AuthPageContainer } from "../components/layout/containers";
import { DataCard } from "../components/layout/data-card";
import { Flex } from "../components/layout/flex";
import { EditWalletModal } from "../components/modals/edit-wallet-modal";
import { AuthContext } from "../contexts/auth.context";

type WalletType = "initial" | "current" | "";

type ModalStateProps = {
  open: boolean;
  walletType: WalletType;
  walletValue: number;
};

export const SettingsPage = () => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetUser({ userId });
  const initialValue = data.user?.wallet_initial_value ?? 0;
  const currentValue = data.user?.wallet_current_value ?? 0;
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

  return (
    <AuthPageContainer>
      <Flex fullwidth sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <DataCard
          onClick={() => handleOpenModal("initial", initialValue)}
          bgcolor="neutral.300"
          width={"100%"}
          height={100}
        >
          <Flex y yc xc gap2 fullheight>
            <Typography level="title-md">Initial value</Typography>
            {loading ? <CircularProgress size="sm" /> : <Typography level="title-lg">{initialValue} €</Typography>}
          </Flex>
        </DataCard>
        <DataCard onClick={() => handleOpenModal("current", currentValue)} bgcolor="success.300" width={"100%"}>
          <Flex y yc xc gap2 fullheight>
            <Typography level="title-md">Current value</Typography>
            {loading ? <CircularProgress size="sm" /> : <Typography level="title-lg">{currentValue} €</Typography>}
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

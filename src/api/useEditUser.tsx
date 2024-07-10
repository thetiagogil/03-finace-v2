import { useState } from "react";
import { UserModel } from "../models/user.model";
import { DataService } from "../services/data-service";

type UseEditUserWalletProps = {
  userId?: string;
  updatedUserData: UserModel;
};

export const useEditUserWallet = ({ userId, updatedUserData }: UseEditUserWalletProps) => {
  const [loading, setLoading] = useState(false);

  const editUserWallet = async () => {
    setLoading(true);
    try {
      await DataService.putData(`/api/users/${userId}`, updatedUserData);
    } catch (error) {
      console.error("Error updating user wallet:", error);
    } finally {
      setLoading(false);
    }
  };

  return { editUserWallet, loading };
};

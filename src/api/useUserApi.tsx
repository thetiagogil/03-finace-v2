import { useEffect, useState } from "react";
import { UserModel } from "../models/user.model";
import { DataService } from "../services/data-service";

type UserIdProps = {
  userId: string;
};

type UseEditUserWalletProps = {
  userId?: string;
  payload: UserModel;
};

type DataProps = {
  user?: UserModel;
};

export const useGetUser = ({ userId }: UserIdProps) => {
  const [data, setData] = useState<DataProps>({} as DataProps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await DataService.getData(`/api/users/${userId}`);
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      getUser();
    }
  }, [userId]);

  return { data, loading };
};

export const useEditUserWallet = ({ userId, payload }: UseEditUserWalletProps) => {
  const [loading, setLoading] = useState(false);

  const editUserWallet = async () => {
    setLoading(true);
    try {
      await DataService.putData(`/api/users/${userId}`, payload);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { editUserWallet, loading };
};

export const useDeleteUser = ({ userId }: UserIdProps) => {
  const [loading, setLoading] = useState(false);

  const deleteUser = async () => {
    setLoading(true);
    try {
      await DataService.deleteData(`/api/users/${userId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading };
};

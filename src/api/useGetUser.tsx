import { useEffect, useState } from "react";
import { UserModel } from "../models/user.model";
import { DataService } from "../services/data-service";

type UseGetUserProps = {
  userId?: string;
};

type DataProps = {
  user?: UserModel;
};

export const useGetUser = ({ userId }: UseGetUserProps) => {
  const [data, setData] = useState<DataProps>({} as DataProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (userId) {
          const response = await DataService.getData(`/api/users/${userId}`);
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId]);

  return { data, loading };
};

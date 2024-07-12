import { useEffect, useState } from "react";
import { TxModel } from "../models/tx.model";
import { DataService } from "../services/data-service";

type UseGetTxByStatusProps = {
  userId: string;
  status: string;
};

export const useCreateTx = () => {
  const [loading, setLoading] = useState(false);

  const createTx = async (payload: TxModel) => {
    setLoading(true);
    try {
      await DataService.postData(`/api/tx`, payload);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { createTx, loading };
};

export const useGetTxByStatus = ({ userId, status }: UseGetTxByStatusProps) => {
  const [data, setData] = useState<TxModel[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/tx`, { user_id: userId, status: status });
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && status) {
      fetchData();
    }
  }, [userId, status]);

  return { data, loading };
};

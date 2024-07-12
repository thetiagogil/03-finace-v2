import { useEffect, useState } from "react";
import { TxModel } from "../models/tx.model";
import { DataService } from "../services/data-service";

type UseGetTxByStatusProps = {
  userId: string;
  status: "tracked" | "planned";
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
      location.reload();
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
      const response = await DataService.getData(`/api/tx/${userId}/${status}`);
      response.sort((a: { date: Date }, b: { date: Date }) => new Date(b.date).getTime() - new Date(a.date).getTime());
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

export const useEditTxById = () => {
  const [loading, setLoading] = useState(false);

  const editTxById = async (txId: string, payload: TxModel) => {
    setLoading(true);
    try {
      await DataService.putData(`/api/tx/${txId}`, payload);
    } catch (error) {
      console.error("Error editing transaction:", error);
    } finally {
      setLoading(false);
      location.reload();
    }
  };

  return { editTxById, loading };
};

export const useDeleteTx = () => {
  const [loading, setLoading] = useState(false);

  const deleteTx = async (txId: string | undefined) => {
    setLoading(true);
    try {
      await DataService.deleteData(`/api/tx/${txId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      location.reload();
    }
  };

  return { deleteTx, loading };
};

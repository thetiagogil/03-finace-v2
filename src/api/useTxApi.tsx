import { useState } from "react";
import { TxModel } from "../models/tx.model";
import { DataService } from "../services/data-service";

type UseCreateTxProps = {
  payload: TxModel;
};

export const useCreateTx = ({ payload }: UseCreateTxProps) => {
  const [loading, setLoading] = useState(false);

  const createTx = async () => {
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

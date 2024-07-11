import { useState } from "react";
import { TxModel } from "../models/tx.model";
import { DataService } from "../services/data-service";

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

import { useEffect, useState } from "react";
import { DataService } from "../services/data-service";

type UseGetYearsByUserIdProps = {
  userId: string;
};

export const useGetYearsByUserId = ({ userId }: UseGetYearsByUserIdProps) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getYears = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/tx/years/${userId}`);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getYears();
    }
  }, [userId]);

  return { data, loading };
};

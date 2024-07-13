import { useEffect, useState } from "react";
import { YearModel } from "../models/year.model";
import { DataService } from "../services/data-service";

type UseGetYearsByUserIdProps = {
  userId: string;
  status: "tracked" | "planned";
};

export const useGetYearsByUserId = ({ userId, status }: UseGetYearsByUserIdProps) => {
  const [data, setData] = useState<YearModel[]>([]);
  const [loading, setLoading] = useState(false);

  const getYears = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/tx/years/${userId}/${status}`);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && status) {
      getYears();
    }
  }, [userId, status]);

  return { data, loading };
};

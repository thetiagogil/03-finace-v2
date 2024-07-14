import { useEffect, useState } from "react";
import { YearModel } from "../models/year.model";
import { DataService } from "../services/data-service";

type UseGetYearsByUserIdProps = {
  userId: string;
  status: "tracked" | "planned";
};

type UseGetYearByStatusProps = {
  userId: string;
  status: "tracked" | "planned";
  year: number;
};

export const useGetAllYearsByStatus = ({ userId, status }: UseGetYearsByUserIdProps) => {
  const [data, setData] = useState<YearModel[]>([]);
  const [loading, setLoading] = useState(false);

  const getYears = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/${userId}/${status}`);
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

export const useGetYearByStatus = ({ userId, status, year }: UseGetYearByStatusProps) => {
  const [data, setData] = useState<YearModel>({} as YearModel);
  const [loading, setLoading] = useState(false);

  const getYears = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/${userId}/${status}/${year}`);
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

export const useGetYearCategorySummaryByStatus = ({ userId, status, year }: UseGetYearByStatusProps) => {
  const [data, setData] = useState<{
    incomes: Record<string, Record<string, number>>;
    expenses: Record<string, Record<string, number>>;
  }>({ incomes: {}, expenses: {} });
  const [loading, setLoading] = useState(false);

  const getYearCategorySummary = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/${userId}/${status}/${year}/month-summary`);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && status) {
      getYearCategorySummary();
    }
  }, [userId, status]);

  return { data, loading };
};

// TODO: useGetYearTopMonthsByStatus
// TODO: useGetYearTopCategoriesByStatus
// TODO: useGetYearMonthTotalsByStatus

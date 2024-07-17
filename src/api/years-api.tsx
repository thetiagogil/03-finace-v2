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

export const useGetAllYears = ({ userId, status }: UseGetYearsByUserIdProps) => {
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

export const useGetYear = ({ userId, status, year }: UseGetYearByStatusProps) => {
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

export const useGetYearCategoriesByMonths = ({ userId, status, year }: UseGetYearByStatusProps) => {
  const [data, setData] = useState<{
    incomes: Record<string, Record<string, number>>;
    expenses: Record<string, Record<string, number>>;
  }>({ incomes: {}, expenses: {} });
  const [loading, setLoading] = useState(false);

  const getYearCategories = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/category-by-month/${userId}/${status}/${year}`);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && status) {
      getYearCategories();
    }
  }, [userId, status]);

  return { data, loading };
};

// TODO: useGetYearTopMonths
// TODO: useGetYearTopCategories
// TODO: useGetYearMonthTotals
// TODO: useGetYearCategoriesByMonths

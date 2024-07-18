import { useEffect, useState } from "react";
import { YearModel } from "../models/year.model";
import { DataService } from "../services/data-service";

type useGetYearsProps = {
  userId: string;
};

type useGetMonthsProps = {
  userId: string;
  year: number;
};

type UseGetYearsByUserIdProps = {
  userId: string;
  status: "tracked" | "planned";
};

type UseGetYearByStatusProps = {
  userId: string;
  status: "tracked" | "planned";
  year: number;
};

type UseGetYearCategorySummaryProps = {
  userId: string;
  year: number | null;
  month?: string;
};

export const useGetYears = ({ userId }: useGetYearsProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getYears = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/${userId}`);
      setData(response);
    } catch (error) {
      console.error(error);
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

export const useGetMonths = ({ userId, year }: useGetMonthsProps) => {
  const [data, setData] = useState<string[]>([] as string[]);
  const [loading, setLoading] = useState(false);

  const getMonths = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/months/${userId}/${year}`);
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && year) {
      getMonths();
    }
  }, [userId, year]);

  return { data, loading };
};

export const useGetYearsInfo = ({ userId, status }: UseGetYearsByUserIdProps) => {
  const [data, setData] = useState<YearModel[]>([]);
  const [loading, setLoading] = useState(false);

  const getYears = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/${userId}/${status}`);
      setData(response);
    } catch (error) {
      console.error(error);
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

export const useGetYearInfo = ({ userId, status, year }: UseGetYearByStatusProps) => {
  const [data, setData] = useState<YearModel>({} as YearModel);
  const [loading, setLoading] = useState(false);

  const getYear = async () => {
    setLoading(true);
    try {
      const response = await DataService.getData(`/api/years/${userId}/${status}/${year}`);
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && status) {
      getYear();
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
      console.error(error);
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

export const useGetYearCategorySummary = ({ userId, year, month }: UseGetYearCategorySummaryProps) => {
  const [data, setData] = useState({ incomes: {}, expenses: {} });
  const [loading, setLoading] = useState(false);

  const getYearCategorySummary = async () => {
    setLoading(true);
    try {
      let url = `/api/years/category-summary/${userId}/${year}`;

      if (month !== "") {
        url += `/${month}`;
      }

      const response = await DataService.getData(url);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && year) {
      getYearCategorySummary();
    }
  }, [userId, year, month]);

  return { data, loading };
};

// TODO: useGetYearTopMonths
// TODO: useGetYearTopCategories
// TODO: useGetYearMonthTotals

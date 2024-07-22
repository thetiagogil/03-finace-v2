import { Option, Select } from "@mui/joy";
import { capFirstLetter } from "../../utils/typo";
import { fullMonths, shortMonths } from "../arrays/months-array";
import { Flex } from "../shared/flex";

type DashboardFiltersProps = {
  years: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  isMonthDisabled: (shortMonth: string) => boolean;
};

export const DashboardFilters = ({
  years,
  selectedYear,
  setSelectedYear,
  selectedMonth,
  setSelectedMonth,
  isMonthDisabled
}: DashboardFiltersProps) => {
  const stylesSelect = { width: { xs: "100%", sm: 200 } };

  return (
    <Flex gap2>
      <Select
        value={selectedYear}
        onChange={(_e: any, newValue: any) => setSelectedYear(newValue)}
        placeholder="Select Year"
        sx={stylesSelect}
      >
        {years?.map((year, index) => (
          <Option key={index} value={year}>
            {year}
          </Option>
        ))}
      </Select>
      <Select
        value={selectedMonth}
        onChange={(_e: any, newValue: any) => setSelectedMonth(newValue)}
        placeholder="Select Month"
        sx={stylesSelect}
      >
        <Option value="">All Year</Option>
        {shortMonths.map((shortMonth, index) => (
          <Option key={index} value={shortMonth} disabled={isMonthDisabled(shortMonth)}>
            {capFirstLetter(fullMonths[index])}
          </Option>
        ))}
      </Select>
    </Flex>
  );
};

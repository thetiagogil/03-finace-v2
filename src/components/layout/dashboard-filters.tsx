import { Option, Select, selectClasses } from "@mui/joy";
import { IoIosArrowDown } from "react-icons/io";
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
  const hasData = years && years.length > 0;
  const styleSelect = {
    width: { xs: "100%", sm: 128 },
    [`& .${selectClasses.indicator}`]: {
      transition: "0.3s",
      [`&.${selectClasses.expanded}`]: {
        transform: "rotate(-180deg)"
      }
    }
  };

  return (
    <>
      {hasData && (
        <Flex gap2 sx={{ width: { xs: "100%", sm: "auto" } }}>
          <Select
            value={selectedYear}
            onChange={(_e: any, newValue: any) => setSelectedYear(newValue)}
            placeholder="Select Year"
            indicator={<IoIosArrowDown />}
            sx={styleSelect}
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
            indicator={<IoIosArrowDown />}
            sx={styleSelect}
          >
            <Option value="">All Year</Option>
            {shortMonths.map((shortMonth, index) => (
              <Option key={index} value={shortMonth} disabled={isMonthDisabled(shortMonth)}>
                {capFirstLetter(fullMonths[index])}
              </Option>
            ))}
          </Select>
        </Flex>
      )}
    </>
  );
};

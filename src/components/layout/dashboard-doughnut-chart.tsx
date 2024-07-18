import { Typography } from "@mui/joy";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { capFirstLetter } from "../../utils/typo";
import { Flex } from "../shared/flex";

Chart.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  data: { [key: string]: number };
  title: string;
};

export const DoughnutChart = ({ data, title }: DoughnutChartProps) => {
  const shades = ["#36A2EB", "#5DA5E0", "#84A8D5", "#ABAACB", "#D2ADC0", "#F9B0B5"];

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: title,
        data: Object.values(data),
        backgroundColor: shades,
        hoverOffset: 8
      }
    ]
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false
      },
      text: {},
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${capFirstLetter(tooltipItem.label)}: ${tooltipItem.raw}`;
          }
        }
      }
    }
  };

  return (
    <>
      <Typography level="title-sm">{title}</Typography>
      <Flex sx={{ width: 100 }}>
        <Doughnut data={chartData} options={chartOptions} />
      </Flex>
    </>
  );
};

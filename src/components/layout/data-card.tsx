import { Card } from "@mui/joy";
import { FC, ReactNode } from "react";

interface DataCardProps {
  children?: ReactNode;
  bgcolor?: string;
  width?: number | string;
  height?: number;
}

export const DataCard: FC<DataCardProps> = ({ children, bgcolor, width, height }) => {
  const styles = { bgcolor: bgcolor, width: width, height: height, m: 1, border: "none" };
  return <Card sx={styles}>{children}</Card>;
};

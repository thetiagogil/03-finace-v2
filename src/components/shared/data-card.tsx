import { Box, Card } from "@mui/joy";
import { ReactNode } from "react";

type DataCardProps = {
  children?: ReactNode;
  onClick?: () => void;
  bgcolor?: string;
  width?: number | string;
  height?: number;
};

export const DataCard = ({ children, onClick, bgcolor, width, height }: DataCardProps) => {
  const styles = {
    bgcolor: bgcolor,
    width: width,
    height: height,
    m: 1,
    border: "none",
    cursor: onClick ? "pointer" : "default"
  };
  return (
    <Card component={onClick ? Box : Card} onClick={onClick} sx={styles}>
      {children}
    </Card>
  );
};

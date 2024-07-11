import { Box, Card } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { ReactNode } from "react";

type DataCardProps = {
  children?: ReactNode;
  onClick?: () => void;
  bgcolor?: string;
  width?: number | string;
  height?: number;
  sx?: SxProps;
};

export const DataCard = ({ children, onClick, bgcolor, width, height, sx }: DataCardProps) => {
  const styles = {
    bgcolor: bgcolor,
    width: width,
    height: height,
    m: 1,
    border: "none",
    cursor: onClick ? "pointer" : "default",
    ...sx
  };
  return (
    <Card component={onClick ? Box : Card} onClick={onClick} sx={styles}>
      {children}
    </Card>
  );
};

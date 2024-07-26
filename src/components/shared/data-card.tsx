import { Box, Card } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { ReactNode, useState } from "react";

type DataCardProps = {
  children?: ReactNode;
  onClick?: () => void;
  bgcolor?: string;
  width?: number | string;
  height?: number | string;
  hoverContent?: ReactNode;
  sx?: SxProps;
};

export const DataCard = ({ children, onClick, bgcolor, width, height, hoverContent, sx }: DataCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const styles = {
    bgcolor: bgcolor,
    width: width,
    height: height,
    m: 1,
    border: "none",
    cursor: onClick ? "pointer" : "default",
    ...sx
  };
  const handleMouse = (state: boolean) => {
    if (hoverContent) {
      setIsHover(state);
    }
  };
  return (
    <Card
      component={onClick ? Box : Card}
      onClick={onClick}
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
      sx={styles}
    >
      {isHover ? hoverContent : children}
    </Card>
  );
};

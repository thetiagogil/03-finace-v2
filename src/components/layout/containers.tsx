import { SxProps } from "@mui/joy/styles/types";
import { FC, ReactNode } from "react";
import { Flex } from "./flex";

interface Props {
  children?: ReactNode;
  sx?: SxProps;
}

export const PageContainer: FC<Props> = ({ children, sx }) => {
  const styles = {
    mt: 4,
    mb: 4,
    ...sx
  };

  return (
    <Flex y xc sx={styles}>
      {children}
    </Flex>
  );
};

import { SxProps } from "@mui/joy/styles/types";
import { FC, ReactNode } from "react";
import { MAIN_WIDTH } from "../../utils/constants";
import { Flex } from "./flex";

interface PageContainerProps {
  children?: ReactNode;
  sx?: SxProps;
  auth?: boolean;
}

interface MainContainerProps {
  children?: ReactNode;
  sx?: SxProps;
  auth?: boolean;
}

export const PageContainer: FC<PageContainerProps> = ({ children, sx, auth }) => {
  const styles = {
    mt: auth ? 2 : 4,
    mb: auth ? 0 : 4,
    ...sx
  };

  return (
    <Flex y={auth ? false : true} x={auth ? true : false} xc sx={styles}>
      {children}
    </Flex>
  );
};

export const MainContainer: FC<MainContainerProps> = ({ children, sx, auth }) => {
  const styles = {
    bgcolor: "neutral.100",
    width: MAIN_WIDTH,
    ...sx
  };
  return <Flex sx={styles}>{children}</Flex>;
};

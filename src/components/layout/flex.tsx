import { Box, Skeleton } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  sx?: SxProps;
  x?: boolean;
  y?: boolean;
  xs?: boolean;
  xc?: boolean;
  xe?: boolean;
  ys?: boolean;
  yc?: boolean;
  ye?: boolean;
  xsb?: boolean;
  ysb?: boolean;
  xsa?: boolean;
  ysa?: boolean;
  gap?: number;
  gap1?: boolean;
  gap2?: boolean;
  gap3?: boolean;
  wrap?: boolean;
  grow?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
  pointer?: boolean;
}

export const Flex: FC<Props> = ({
  children,
  sx,
  x,
  y,
  xs,
  xc,
  xe,
  ys,
  yc,
  ye,
  xsb,
  ysb,
  gap,
  gap1,
  gap2,
  gap3,
  xsa,
  ysa,
  fullwidth,
  wrap,
  grow,
  loading,
  pointer
}) => {
  const style: SxProps = { display: "flex" };

  if (x) style.flexDirection = "row";
  if (y) style.flexDirection = "column";
  if (xs) style[x ? "justifyContent" : "alignItems"] = "flex-start";
  if (xc) style[x ? "justifyContent" : "alignItems"] = "center";
  if (xe) style[x ? "justifyContent" : "alignItems"] = "flex-end";
  if (xsb) style[x ? "justifyContent" : "alignItems"] = "space-between";
  if (xsa) style[x ? "justifyContent" : "alignItems"] = "space-around";

  if (ys) style[y ? "justifyContent" : "alignItems"] = "flex-start";
  if (yc) style[y ? "justifyContent" : "alignItems"] = "center";
  if (ye) style[y ? "justifyContent" : "alignItems"] = "flex-end";
  if (ysb) style[y ? "justifyContent" : "alignItems"] = "space-between";
  if (ysa) style[y ? "justifyContent" : "alignItems"] = "space-around";

  if (gap1) {
    style.columnGap = 1;
    style.rowGap = 1;
  }

  if (gap2) {
    style.columnGap = 2;
    style.rowGap = 2;
  }

  if (gap3) {
    style.columnGap = 3;
    style.rowGap = 3;
  }

  if (gap) {
    style.columnGap = gap;
    style.rowGap = gap;
  }

  if (fullwidth) {
    style.width = "100%";
  }

  if (wrap) {
    style.flexWrap = "wrap";
  }

  if (grow) {
    style.flexGrow = 1;
  }

  if (pointer) {
    style.cursor = "pointer";
  }

  return (
    <Skeleton animation="wave" loading={loading || false}>
      <Box sx={{ ...style, ...sx }}>{children}</Box>
    </Skeleton>
  );
};

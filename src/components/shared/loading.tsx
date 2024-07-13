import { CircularProgress } from "@mui/joy";
import { Flex } from "./flex";

export const Loading = () => {
  return (
    <Flex sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Flex>
  );
};

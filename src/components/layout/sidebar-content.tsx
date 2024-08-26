import { Link, List, ListItem, Typography } from "@mui/joy";
import { useContext } from "react";
import { Link as ReactLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import { NAVBAR_HEIGHT } from "../../utils/constants";
import { linksArray } from "../arrays/links-array";
import { Flex } from "../shared/flex";

export const SidebarContent = () => {
  const { pathname } = useLocation();
  const { hasData, loadingData } = useContext(AuthContext);

  return (
    <Flex y fullwidth>
      <Flex x yc xc fullwidth sx={{ height: NAVBAR_HEIGHT }}>
        <Typography level="title-md">FIN/ACE</Typography>
      </Flex>
      {!loadingData && (
        <List sx={{ py: 0 }}>
          {linksArray.map((link, index) => {
            const selected = pathname.includes(link.path);
            const isDisabled = (link.path === "/dashboard" || link.path === "/overview") && !hasData;
            return (
              <ListItem key={index} sx={{ py: 1, px: 4, "&:hover": { bgcolor: "neutral.200" } }}>
                <Link
                  component={ReactLink}
                  underline="none"
                  to={link.path}
                  startDecorator={link.icons && (selected ? link.icons?.iconSelected : link.icons?.icon)}
                  disabled={isDisabled}
                  sx={{ width: "100%", color: "neutral.900" }}
                >
                  {link.icons && link.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      )}
    </Flex>
  );
};

import { Link, List, ListItem } from "@mui/joy";
import { Link as ReactLink, useLocation } from "react-router-dom";
import { linksArray } from "../arrays/links-array";
import { Flex } from "../shared/flex";
import Favicon from "/favicon.png";

type Props = {
  textColor?: string;
};

export const SidebarContent = ({ textColor }: Props) => {
  const { pathname } = useLocation();

  return (
    <Flex y>
      <Flex y xc gap2 sx={{ py: 4 }}>
        <img src={Favicon} width={64} />
      </Flex>
      <List>
        {linksArray.map((link, index) => {
          const selected = pathname.includes(link.path);
          return (
            <ListItem key={index}>
              <Link
                component={ReactLink}
                underline="none"
                to={link.path}
                startDecorator={link.icons && (selected ? link.icons?.iconSelected : link.icons?.icon)}
                sx={{ color: textColor }}
              >
                {link.icons && link.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

import { Link, List, ListItem } from "@mui/joy";
import { IoIosGitCompare, IoMdGitCompare } from "react-icons/io";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { PiSquaresFour, PiSquaresFourFill } from "react-icons/pi";
import { Link as ReactLink, useLocation } from "react-router-dom";

export const SidebarContent = () => {
  const { pathname } = useLocation();
  const iconSize = 25;
  const content = {
    Dashboard: {
      icon: <MdOutlineSpaceDashboard size={iconSize} />,
      iconSelected: <MdSpaceDashboard size={iconSize} />,
      title: "Dashboard",
      path: "/dashboard",
      disabled: false
    },
    Overview: {
      icon: <PiSquaresFour size={iconSize} />,
      iconSelected: <PiSquaresFourFill size={iconSize} />,
      title: "Overview",
      path: "/overview",
      disabled: false
    },
    Transactions: {
      icon: <IoIosGitCompare size={iconSize} />,
      iconSelected: <IoMdGitCompare size={iconSize} />,
      title: "Transactions",
      path: "/transactions",
      disabled: false
    }
  };

  return (
    <List>
      {Object.keys(content).map(key => {
        const item = content[key as keyof typeof content];
        const selected = pathname.includes(item.path);
        return (
          <ListItem key={key}>
            <Link
              component={ReactLink}
              to={item.path}
              startDecorator={selected ? item.iconSelected : item.icon}
              sx={{ color: "neutral.100" }}
            >
              {item.title}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

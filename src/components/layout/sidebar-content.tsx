import { Link, List, ListItem } from "@mui/joy";
import { FC } from "react";
import { BsClipboardData, BsClipboardDataFill } from "react-icons/bs";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { PiSquaresFour, PiSquaresFourFill } from "react-icons/pi";
import { TbTransform, TbTransformFilled } from "react-icons/tb";
import { Link as ReactLink, useLocation } from "react-router-dom";

import Favicon from "../../../public/favicon.png";
import { Flex } from "./flex";

interface Props {
  textColor?: string;
}

export const SidebarContent: FC<Props> = ({ textColor }) => {
  const { pathname } = useLocation();
  const iconSize = 25;
  const content = {
    Dashboard: {
      icon: <MdOutlineSpaceDashboard size={iconSize} />,
      iconSelected: <MdSpaceDashboard size={iconSize} />,
      title: "Dashboard",
      path: "/dashboard"
    },
    Overview: {
      icon: <PiSquaresFour size={iconSize} />,
      iconSelected: <PiSquaresFourFill size={iconSize} />,
      title: "Overview",
      path: "/overview"
    },
    Transactions: {
      icon: <TbTransform size={iconSize} />,
      iconSelected: <TbTransformFilled size={iconSize} />,
      title: "Transactions",
      path: "/transactions"
    },
    Reports: {
      icon: <BsClipboardData size={iconSize} />,
      iconSelected: <BsClipboardDataFill size={iconSize} />,
      title: "Reports",
      path: "/reports"
    },
    Settings: {
      icon: <IoSettingsOutline size={iconSize} />,
      iconSelected: <IoSettingsSharp size={iconSize} />,
      title: "Settings",
      path: "/settings"
    }
  };

  return (
    <Flex y>
      <Flex y xc gap2 sx={{ py: 4 }}>
        <img src={Favicon} width={64} />
      </Flex>
      <List>
        {Object.keys(content).map(key => {
          const item = content[key as keyof typeof content];
          const selected = pathname.includes(item.path);
          return (
            <ListItem key={key}>
              <Link
                component={ReactLink}
                underline="none"
                to={item.path}
                startDecorator={selected ? item.iconSelected : item.icon}
                sx={{ color: textColor }}
              >
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

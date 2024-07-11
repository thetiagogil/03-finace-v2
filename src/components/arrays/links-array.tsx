import { BsClipboardData, BsClipboardDataFill } from "react-icons/bs";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { PiSquaresFour, PiSquaresFourFill } from "react-icons/pi";
import { TbTransform, TbTransformFilled } from "react-icons/tb";

const iconSize = 25;

export const linksArray = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: {
      icon: <MdOutlineSpaceDashboard size={iconSize} />,
      iconSelected: <MdSpaceDashboard size={iconSize} />
    }
  },
  {
    title: "Overview",
    path: "/overview",
    icons: {
      icon: <PiSquaresFour size={iconSize} />,
      iconSelected: <PiSquaresFourFill size={iconSize} />
    }
  },
  {
    title: "Activity",
    path: "/activity",
    icons: {
      icon: <TbTransform size={iconSize} />,
      iconSelected: <TbTransformFilled size={iconSize} />
    }
  },
  {
    title: "Reports",
    path: "/reports",
    icons: {
      icon: <BsClipboardData size={iconSize} />,
      iconSelected: <BsClipboardDataFill size={iconSize} />
    }
  },
  {
    title: "Settings",
    path: "/settings",
    icons: {
      icon: <IoSettingsOutline size={iconSize} />,
      iconSelected: <IoSettingsSharp size={iconSize} />
    }
  },
  {
    title: "Profile",
    path: "/profile"
  }
];

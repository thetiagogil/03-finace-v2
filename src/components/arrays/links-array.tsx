import { BiSolidSpreadsheet, BiSpreadsheet } from "react-icons/bi";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { PiCalendarCheck, PiCalendarCheckFill } from "react-icons/pi";

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
    path: `/overview`,
    icons: {
      icon: <PiCalendarCheck size={iconSize} />,
      iconSelected: <PiCalendarCheckFill size={iconSize} />
    }
  },
  {
    title: "Activity",
    path: "/activity",
    icons: {
      icon: <BiSpreadsheet size={iconSize} />,
      iconSelected: <BiSolidSpreadsheet size={iconSize} />
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

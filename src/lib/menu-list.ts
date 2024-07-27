import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    type LucideIcon,
    ReceiptEuroIcon
  } from "lucide-react";

  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  

  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
          }
        ]
      },
      {
        groupLabel: "Contents",
        menus: [
          {
            href: "",
            label: "Posts",
            active: pathname.includes("/posts"),
            icon: SquarePen,
          },
          {
            href: "/categories",
            label: "Categories",
            active: pathname.includes("/categories"),
            icon: Bookmark,

          },
          {
            href: "/tags",
            label: "Tags",
            active: pathname.includes("/tags"),
            icon: Tag,

          }
        ]
      },
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "/users",
            label: "Users",
            active: pathname.includes("/users"),
            icon: Users,

          },
          {
            href: "/account",
            label: "Account",
            active: pathname.includes("/account"),
            icon: Settings,

          }
        ]
      }
    ];
  }


  export function getPathInfo(pathname: string) {
    const menuList = getMenuList(pathname)
    const pageSelected = menuList.flatMap(item => item.menus).filter(menu => menu.href === pathname)

    if(pageSelected.length >0){
      return {label: pageSelected[0].label}
    }

    return {label: ""}
  }
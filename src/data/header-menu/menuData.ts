import { MenuItem } from "@/types/menu-d-t";

const headerMenuData: MenuItem[] = [
  {
    id: 2,
    hasDropdown: false,
    title: "About Us",
    pluseIncon: false,
    link: "/about-us-light",
  },
  {
    id: 4,
    hasDropdown: false,
    active: false,
    pluseIncon: false,
    megaMenu: false,
    children: false,
    title: "Blog",
    link: "/blog-masonry-light",
  },
  {
    id: 6,
    hasDropdown: false,
    active: false,
    pluseIncon: false,
    megaMenu: false,
    title: "Contact",
    link: "/contact",
  },
];
export default headerMenuData;

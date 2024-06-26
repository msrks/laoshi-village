export interface FooterItem {
  title: string;
  titleCn: string;
  href: string;
  description?: string;
  descriptionCn?: string;
}

export interface NavItem {
  title: string;
  titleCn: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;

export type SidebarNavItem = NavItemWithChildren;

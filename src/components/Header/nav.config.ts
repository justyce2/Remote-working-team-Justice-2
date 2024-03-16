export type NavLinkAction = {
  type: "internal" | "external" | "anchor";
  url: string;
};

type DropDownOption = {
  text: string;
  action: NavLinkAction | (() => any);
};

type Navlinks = {
  title: string;
  variant: "text" | "dropdown";
  dropDownOptions?: DropDownOption[];
  action?: NavLinkAction | (() => any);
};

/**
 * Note:
 * Internal is for links that are used within the app but not necessarily on the page
 * External is for links not on our site that we want to navigate to in a new tab
 * anchor If you want to stay on the same page but scroll to a section  `#about` section e.t.c
 */

export const navLinks: Navlinks[] = [
  {
    title: "Find Work",
    variant: "dropdown",
    dropDownOptions: [
      {
        text: "Browse Jobs",
        action: { type: "internal", url: "/jobs" },
      },
    ],
  },
  {
    title: "Hire Staff",
    variant: "text",
    action: { type: "internal", url: "#" },
  },
  {
    title: "Manage Staff",
    variant: "text",
    action: { type: "internal", url: "#" },
  },
  {
    title: "About",
    variant: "dropdown",
    dropDownOptions: [
      {
        text: "About us",
        action: { type: "internal", url: "#" },
      },
      {
        text: "Our Offerings",
        action: { type: "internal", url: "#" },
      },
      {
        text: "How Remoting.com works",
        action: { type: "internal", url: "#" },
      },
      {
        text: "Partnership",
        action: { type: "internal", url: "#" },
      },
      {
        text: "Blog",
        action: { type: "anchor", url: "#blog" },
      },
      {
        text: "Careers",
        action: { type: "internal", url: "#" },
      },
    ],
  },
];

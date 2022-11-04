import { ISubNav } from "components/elements/navigation/SubNav/SubNav";

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  {
    label: 'My Tokens',
    href: '/mytokens',
  },
  {
    label: 'Community',
    href: '#',
    children: [
      {
        label: 'Telegram',
        subLabel: 'Follow us on Telegram',
        href: 'https://telegram.com',
        logo: '/telegram.png',
      },
      {
        label: 'Twitter',
        subLabel: 'Follow us on Twitter',
        href: 'https://twitter.com',
        logo: '/twitter.webp',
      },
    ],
  }
];

export default NAV_LINKS;

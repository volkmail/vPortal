import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutSVG from 'shared/assets/icons/about-20-20.svg';
import MainSVG from 'shared/assets/icons/main-20-20.svg';
import ProfileSVG from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainSVG,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutSVG,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileSVG,
  },
];

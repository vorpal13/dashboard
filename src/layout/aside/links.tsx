import { GlobalOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

export interface MenuLink {
  path: string;
  label: string;
  icon: ReactNode;
}

export const links: MenuLink[] = [
  {
    path: '/',
    label: 'Главная',
    icon: <HomeOutlined />,
  },
  {
    path: '#',
    label: 'Сайты',
    icon: <GlobalOutlined />,
  },
  {
    path: '#',
    label: 'О компании',
    icon: <InfoCircleOutlined />,
  },
];

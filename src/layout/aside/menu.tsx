import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuLink } from './links';

interface AsideMenuProps {
  items: MenuLink[];
}

export const AsideMenu: React.FC<AsideMenuProps> = ({ items }) => {
  const { pathname } = useLocation();

  return (
    <Menu
      mode="inline"
      selectedKeys={[pathname]}
      items={items.map(({ path, label, icon }) => ({
        key: path,
        label: <Link to={path}>{label}</Link>,
        icon,
      }))}
    />
  );
};

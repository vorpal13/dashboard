import logo from '@/assets/img/UZINFOCOM_logo.png'
import { Divider, Flex, Layout } from 'antd'
import { links } from './links'
import { AsideMenu } from './menu'

const { Sider } = Layout

export const Aside: React.FC = () => {
  return (
    <Sider theme='light' width={250} className='h-screen'>
      <Flex
        justify='center'
        align='center'
        gap={3}
        className='text-lg pt-4 font-semibold w-full'
      >
        <img src={logo} alt='logo' loading='lazy' width={30} />
        UZINFOCOM
      </Flex>
      <Divider />
      <AsideMenu items={links} />
    </Sider>
  )
}

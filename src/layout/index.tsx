import { Outlet } from 'react-router-dom'
import { Aside } from './aside'

const MainLayout = () => {
  return (
    <div className='flex items-start bg-slate-200 min-h-screen'>
      <div className='h-screen fixed'>
        <Aside />
      </div>
      <div className='ml-[250px] p-5 w-full h-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout

import MainLayout from '@/layout'
import { HomePage, SiteInformation } from '@/pages'
import { Route, Routes } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/site/:id',
    element: <SiteInformation />,
  },
]

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        {routes?.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  )
}

import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ru_RU from 'antd/lib/locale/ru_RU'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
  children: ReactNode
}

const queryClient = new QueryClient()

export const AppProviders = ({ children }: Props) => {
  return (
    <ConfigProvider locale={ru_RU}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

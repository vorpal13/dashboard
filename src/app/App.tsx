import { AppProviders } from './providers'
import { Router } from './routes'

export const App = () => {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  )
}

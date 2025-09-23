import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Nosotros = React.lazy(() => import('./Pages/nosotros'))
const Dashboard = React.lazy(() => import('./Pages/dashboard'))

const App: React.FunctionComponent = (props: any) => {
  const routes = [
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: Nosotros,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
  ]

  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />
      })}
    </Switch>
  )

  return (
    <React.Fragment>
      <React.Suspense fallback={<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>Loading</span>}>
        <React.Fragment>{switchRoutes}</React.Fragment>
      </React.Suspense>
    </React.Fragment>
  )
}

export default App

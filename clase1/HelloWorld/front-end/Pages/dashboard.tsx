import Sidebar from '@components/Sidebar/Sidebar'
import baseClasses from '@components/Themes/layout.module.scss'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import minimum from '../components/Themes/minimum.module.scss'

const Dashboard: FunctionComponent = (props: any) => {
  const {
    history: navigation,
    match: { params },
  } = props
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = { ...baseClasses, ...minimum }

  // Theme selection

  React.useEffect(() => {
    if (typeof langStrings !== 'undefined') {
      setlang(langStrings[localStorage.getItem('aptugolang') || 'en'])
    }
  }, [])

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <Sidebar open={true}>
          <NavLink exact to="/" key="yqQhp4TO">
            <ListItem button className={classes.itemLink}>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
        </Sidebar>
        <div data-title="Main Area" className={theme.mainarea}>
          <div data-title="div - Hello Text" className={classes.bigHello}>
            <Typography variant="h1">¡Bienvenido!</Typography>

            <Typography variant="body1">Este es el primer ejercicio del curso de apicaciones web</Typography>

            <span>(you can edit me at the Page Manager)</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard

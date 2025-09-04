import baseClasses from '@components/Themes/layout.module.scss'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
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
        <Grid container alignItems="center" justifyContent="center" direction="column" wrap="nowrap" gap={1}>
          <div data-title="div Titulo">
            <Typography variant="h1">Google</Typography>
          </div>

          <div data-title="div Buscador">
            <TextField variant="outlined" size="medium" type="text" fullWidth />
          </div>

          <Grid container alignItems="center" justifyContent="center" direction="row" wrap="nowrap" gap={1}>
            <Button variant="outlined" color="primary">
              Voy a tener suerte
            </Button>

            <Button variant="outlined" color="primary">
              Buscar en Google
            </Button>
          </Grid>

          <Grid container alignItems="center" justifyContent="center" direction="row" wrap="nowrap" gap={0.5}>
            <Typography variant="body1">Descubre la histroria, cultura y leyendas de las</Typography>

            <NavLink to="/">
              <Typography variant="body1">civilizaciones Mayas y Aztecas</Typography>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Dashboard

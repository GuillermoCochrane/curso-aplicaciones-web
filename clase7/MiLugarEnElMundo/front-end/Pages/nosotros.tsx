import baseClasses from '@components/Themes/layout.module.scss'
import AppBar from '@mui/material/AppBar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { FunctionComponent } from 'react'
import { Fade } from 'react-awesome-reveal'
import { NavLink } from 'react-router-dom'
import minimum from '../components/Themes/minimum.module.scss'

const Nosotros: FunctionComponent = (props: any) => {
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
      <div className={classes.mainPanel}>
        <AppBar elevation={0} color="primary" position="sticky" title="">
          <Toolbar>
            <Grid container alignItems="center" justifyContent="center" direction="row" wrap="nowrap">
              <Grid container alignItems="center" justifyContent="center" direction="row" wrap="nowrap">
                <NavLink to="/">
                  <Typography variant="body1">PRINCIPAL</Typography>
                </NavLink>
              </Grid>

              <Grid container alignItems="center" justifyContent="center" direction="row" wrap="nowrap">
                <NavLink to="/nosotros">
                  <Typography variant="body1">Nosotros</Typography>
                </NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Grid container alignItems="center" justifyContent="center" direction="column">
            <Fade direction={'up'} delay={500} duration={1500} damping={0.5}>
              <div data-title="div">
                <Typography variant="h1">Mi comunidad</Typography>
              </div>
            </Fade>

            <Fade direction={'left'} delay={1000} duration={2000} damping={0.5}>
              <div data-title="div">
                <Typography variant="subtitle1">
                  El lugar se encuentra en una región remota del norte argentino, rodeado de montañas y valles. El aire fresco y la brisa suave son
                  constantes, lo que hace que el clima sea agradable durante todo el año. El paisaje es impresionante, con una gran variedad de flora
                  y fauna autóctonas. Los árboles frutales y las plantas medicinales son comunes en la zona. La gente del lugar es amable y acogedora,
                  y siempre están dispuestos a compartir sus historias y tradiciones con los visitantes. En resumen, este lugar es un paraíso natural
                  que te dejará sin aliento.
                </Typography>
              </div>
            </Fade>
            <div data-title="divCardSede">
              <Card sx={{ height: 'fit-content', maxWidth: '700px' }}>
                <CardHeader title="Nuestro" subheader="GRUPO"></CardHeader>

                <CardMedia
                  image="/img/grupo.jpeg"
                  sx={{
                    width: '640px',
                  }}
                />

                <CardContent>
                  <Typography variant="h4">Coordinadora - Juanita Perez</Typography>
                </CardContent>

                <CardActions></CardActions>
              </Card>
            </div>
          </Grid>

          <Grid container alignItems="center" justifyContent="space-around" direction="row">
            <div data-title="divUnicef">
              <a target="_blank" href="https://www.unicef.org/argentina/">
                <picture>
                  <img src="/img/unicef.png" alt="/img/unicef.png" width="180" />
                </picture>
              </a>
            </div>

            <div data-title="divAptugo">
              <a target="_blank" href="https://academy.aptugo.com/">
                <picture>
                  <img src="/img/aptugo.png" alt="/img/aptugo.png" width="180" />
                </picture>
              </a>
            </div>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Nosotros

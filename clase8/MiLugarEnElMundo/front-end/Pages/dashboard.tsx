import LeafLet from '@components/LeafLet/LeafLet.tsx'
import Marker from '@components/LeafLet/Marker.tsx'
import baseClasses from '@components/Themes/layout.module.scss'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import miSedemodulescss from 'dist/css/miSede.module.scss'
import React, { FunctionComponent } from 'react'
import { Fade } from 'react-awesome-reveal'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'react-router-dom'

const Dashboard: FunctionComponent = (props: any) => {
  const {
    history: navigation,
    match: { params },
  } = props
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = { ...baseClasses, ...miSedemodulescss }
  const [leafLetPosition, setleaftLetPosition] = React.useState([51.505, -0.09])
  const LeafLetMap = LeafLet

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
          <div data-title="divTituloAnimado">
            <Fade direction={'down'} delay={500} duration={1500} damping={0.5}>
              <div data-title="divTitulo">
                <Typography variant="h1">General Levalle</Typography>
              </div>
            </Fade>
          </div>

          <div data-title="divImagen">
            <picture>
              <img src="/img/paisajerural.jpg" alt="Sede General Levalle" width="850" />
            </picture>
          </div>

          <Container maxWidth="md">
            <div data-title="divParrafo">
              <Typography variant="h6">
                El Gobierno provincial, a través del Ministerio de Educación, firmó una alianza con la iniciativa Oportunidades Únicas de UNICEF y la
                empresa Aptugo para brindar capacitaciones en habilidades digitales, como la programación, destinadas a jóvenes, con el objetivo de
                construir un mejor futuro y ampliar sus oportunidades laborales.
              </Typography>
            </div>
          </Container>

          <Grid container alignItems="center" justifyContent="center" direction="row" wrap="nowrap">
            <Carousel
              height={500}
              navButtonsAlwaysVisible={true}
              autoPlay={true}
              sx={{ width: 500 }}
              indicators={false}
              navButtonsAlwaysInvisible={false}
              animation="fade"
            >
              <picture>
                <img src="/img/1.jpg" alt="/img/1.jpg" width="500" />
              </picture>
              <picture>
                <img src="/img/2.jpg" alt="/img/2.jpg" width="500" />
              </picture>
              <picture>
                <img src="/img/3.jpg" alt="/img/3.jpg" width="500" />
              </picture>
              <picture>
                <img src="/img/4.jpg" alt="/img/4.jpg" width="500" />
              </picture>
              <picture>
                <img src="/img/5.jpeg" alt="/img/5.jpeg" width="500" />
              </picture>
            </Carousel>
          </Grid>

          <Container maxWidth="xs">
            <LeafLetMap position={[-34.01472, -63.92413]} zoom={15} scroll={true}>
              <Marker position={[-34.01472, -63.92413]}></Marker>
            </LeafLetMap>
          </Container>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard

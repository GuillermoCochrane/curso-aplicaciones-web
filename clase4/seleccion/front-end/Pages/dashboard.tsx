import baseClasses from '@components/Themes/layout.module.scss'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import estilosmodulescss from 'dist/css/estilos.module.scss'
import React, { FunctionComponent } from 'react'

const Dashboard: FunctionComponent = (props: any) => {
  const {
    history: navigation,
    match: { params },
  } = props
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = { ...baseClasses, ...estilosmodulescss }

  // Theme selection

  React.useEffect(() => {
    if (typeof langStrings !== 'undefined') {
      setlang(langStrings[localStorage.getItem('aptugolang') || 'en'])
    }
  }, [])

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <div data-title="Main Area" className={theme.mainarea}>
          <Container maxWidth="md">
            <Typography variant="h1">¡Selección Argentina!</Typography>

            <picture>
              <img
                src="https://drive.google.com/thumbn
ail?id=1pkFagFK-fyrL2uAmu3VI3
RKWrqSNF1Xf&sz=w852"
                alt="https://drive.google.com/thumbn
ail?id=1pkFagFK-fyrL2uAmu3VI3
RKWrqSNF1Xf&sz=w852"
              />
            </picture>

            <Typography variant="body1">
              La selección argentina de fútbol se consagró campeona del mundo el 18 de diciembre de 2022, tras vencer a Francia en la final de la Copa
              Mundial de Fútbol de Qatar. El partido, disputado en el estadio Lusail, terminó empatado 3-3 en los 120 minutos, por lo que se definió
              en tanda de penales, en la que Argentina se impuso 4-2.
            </Typography>

            <div data-title="div">
              <Button variant="contained" color="primary" fullWidth>
                Para más información sobre la Selección
              </Button>

              <Button variant="contained" color="secondary" fullWidth>
                Para más información sobre Messi
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard

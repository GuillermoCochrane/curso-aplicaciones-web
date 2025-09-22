import baseClasses from '@components/Themes/layout.module.scss'
import React, { FunctionComponent } from 'react'
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
      <div className={classes.mainPanel}></div>
    </React.Fragment>
  )
}

export default Nosotros

/* eslint-disable no-new */
import React from 'react'
import './index.scss'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Application from './components/applicacion'

const App = () => (
  <MuiThemeProvider>
    <Application />
  </MuiThemeProvider>
)

render(<App />, document.getElementById('app'))

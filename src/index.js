import React from 'react'
import { render } from 'react-dom'
import Inbox from './Inbox.js'

import { I18nProvider } from '@lingui/react'
import catalogCs from './locales/cs/messages.js'

const catalogs = { cs: catalogCs };
const App = () => (
  <I18nProvider language="en" catalogs={catalogs}>
    <Inbox />
  </I18nProvider>
)

render(<App />, document.getElementById('root'))
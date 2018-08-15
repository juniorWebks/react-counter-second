import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './views/Counter'
import Calculator from './views/Calculator'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={'/calculator'}>
            Calculator
          </Link>
          <Link to={'/counter'}>
            Counter
          </Link>

          <Route path={'/'} exact component={Calculator} />
          <Route path={'/calculator'} component={Calculator} />
          <Route path={'/counter'} component={Counter} />
        </div>
      </Router>
    )
  }
}

export default App

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Calculator } from './components/Calculator'

// CSSリセット
import 'glamor-reset'

ReactDOM.render(
  <Calculator />,
  document.querySelector('#content')
);

import * as React from 'react'
import { css } from 'glamor'

export default ({children}) => (
  <div className={css({display: 'flex'})}>
    {children}
  </div>
)

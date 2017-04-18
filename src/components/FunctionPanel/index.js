import React from 'react'
import styles from './styles'
import { NEUTRAL, ADDITION, SUBSTARCTION, MULTIPLICATION, DIVISION } from '../../constants/modes'

const FunctionButton = ({children, onPush}) => (
  <button className={`${styles}`} onClick={onPush}>{children}</button>
)

const FunctionPanel = ({onClear, onSetMode, onExecute}) => {
  return (
    <div>
      <FunctionButton onPush={() => (onSetMode(ADDITION))}>+</FunctionButton>
      <FunctionButton onPush={() => (onSetMode(SUBSTARCTION))}>-</FunctionButton>
      <FunctionButton onPush={() => (onSetMode(MULTIPLICATION))}>×</FunctionButton>
      <FunctionButton onPush={() => (onSetMode(DIVISION))}>÷</FunctionButton>
      <FunctionButton onPush={() => (onExecute())}>=</FunctionButton>
    </div>
  )
}

export default FunctionPanel

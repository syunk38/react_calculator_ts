import { NEUTRAL } from '../../constants/modes'
import { calculatorStateType } from './calculatorStateType'

export default (state:calculatorStateType, value:number) :number | string => {
  if (state.displayValue === "0") {
    return value
  }
  if(state.mode !== NEUTRAL && state.rightValue === 0) {
    return value
  }
  const newValue = `${state.displayValue}${value}`
  if (newValue.length > 10){
    return state.displayValue
  }
  return newValue
}

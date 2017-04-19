import { NEUTRAL, ADDITION, SUBSTARCTION, MULTIPLICATION, DIVISION } from '../../constants/modes'

const defaultFunc = (_:number,right:number) :number => (right)

export default (mode:string) :Function => {
  switch(mode) {
    case NEUTRAL:
      return defaultFunc
    case ADDITION:
      return (left:number, right:number) :number => (left + right)
    case SUBSTARCTION:
      return (left:number, right:number) :number => (left - right)
    case MULTIPLICATION:
      return (left:number, right:number) :number => (left * right)
    case DIVISION:
      return (left:number, right:number) :number => (left / right)
    default:
      return defaultFunc
  }
}

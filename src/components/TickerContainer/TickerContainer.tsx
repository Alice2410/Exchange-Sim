import { TickerProvider } from "../../context/TickerContext"
import AddTickerButton from "../AddTickerButton/AddTickerButton"
import Ticker from "../Ticker/Ticker"


const TickerContainer = () => {
  return (
    <TickerProvider>
      <AddTickerButton></AddTickerButton>
      <Ticker></Ticker>
    </TickerProvider>
  )
}

export default TickerContainer;
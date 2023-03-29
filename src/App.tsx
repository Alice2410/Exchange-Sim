import styles from './App.module.css';
import AddTickerButton from './components/AddTickerButton/AddTickerButton';
import Ticker from './components/Ticker/Ticker';
import { TickerProvider } from './context/TickerContext';

function App() {
  return (
    <div className={styles.app}>
      <TickerProvider>
        <AddTickerButton></AddTickerButton>
        <Ticker></Ticker>
      </TickerProvider>
      
    </div>
  );
}

export default App;

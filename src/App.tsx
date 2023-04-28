import { useEffect } from 'react';
import styles from './App.module.css';
import Table from './components/Table/Table';
import TickerContainer from './components/TickerContainer/TickerContainer';

import { useWebSocket } from './hooks/useWebSocket';


function App() {
  const {connect, closeConnection} = useWebSocket();
  
  useEffect(() => {
    connect();

    return(
     () => closeConnection()
    )
  }, []);

  return (
    <div className={styles.app}>
      <TickerContainer></TickerContainer>
      <Table></Table>
    </div>
  );
}

export default App;

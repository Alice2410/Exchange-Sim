import React, { ReactNode, useRef, useState } from "react";
import { mockServer } from "../mockServer";
import { WebSocket } from 'mock-socket';
import { ServerMessageType } from "../Enums";
import { Offer, ServerEnvelope } from "../Models/ServerMessages";

interface WSProviderProps {
  children: ReactNode;
}

interface WSContextValue{
  tableData: Offer[];
  connect(): void;
  closeConnection(): void;
  sendMessage(): void;
}

export const WSContext = React.createContext({} as WSContextValue);

export const WSProvider = ({children}: WSProviderProps) => {
  const [tableData, setTableData] = useState<Offer[]>([]);
  const socket = useRef<WebSocket | undefined>();
  const hasServer = useRef(false);

  function connect () {
    if(!socket.current) {
      const fakeURL = 'ws://localhost:8080';
      
      if(!hasServer.current) {   
        const wsServer = new mockServer(fakeURL);
        wsServer.initialise();

        hasServer.current = true;
      }
      
      socket.current = new WebSocket(fakeURL);
    }

    if(socket.current) {   
      socket.current.send('hello from client') ;

      socket.current.onclose = () => console.log('WebSocket connection has been closed');
      
      socket.current.onerror = () => {
  
      };
  
      socket.current.onopen = () => console.log('WebSocket connection has been opened');
  
      socket.current.onmessage = (event) => {
        const message: ServerEnvelope = JSON.parse(event.data);
        console.log('message from server', message.message);
        
        
        switch (message.messageType) {
          case ServerMessageType.success:
            console.log(message.message);
            
            break;
          case ServerMessageType.error:
            console.log('error');
  
            break;
          case ServerMessageType.executionReport:
            console.log('executionReport');
  
            break;
          case ServerMessageType.marketDataUpdate:
            console.log('marketDataUpdate');
  
            break;
          case ServerMessageType.tableDataUpdate:
            console.log('change td', tableData);
            setTableData(message.message as Offer[])
            
            console.log('updated td', tableData);
          
            break;
        }
      };
    }
  }

  function sendMessage() { 
    socket.current?.send('CLICK message')
  }

  function closeConnection() {
    socket.current?.close();
    socket.current = undefined;    
  }

  return(
    <WSContext.Provider value={{
      tableData,
      connect,
      closeConnection,
      sendMessage
    }}>
      {children}
    </WSContext.Provider>
  )
}
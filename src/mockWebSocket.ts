import {ClientMessage} from "./Models/ClientMessages";
import {ClientMessageType, Instrument, OrderSide, ServerMessageType} from "./Enums";
import Decimal from "decimal.js";
import {ServerEnvelope} from "./Models/ServerMessages";
import { WebSocket } from 'mock-socket';
import { mockServer } from "./mockServer";

class WSConnector {
  connection: WebSocket | undefined;
  randomString = 'random string';

  constructor() {
    this.connection = undefined;
  }

  connect = () => {
    console.log('in connect');
    const fakeURL = 'ws://localhost:8080';
    const wsServer = new mockServer(fakeURL);
    wsServer.initialise();
    
    this.connection = new WebSocket(fakeURL);
    
    
    this.connection.onclose = () => {
      this.connection = undefined;
    };

    this.connection.onerror = () => {

    };

    this.connection.onopen = () => {

    };

    this.connection.onmessage = (event) => {
      const message: ServerEnvelope = JSON.parse(event.data);
      
      switch (message.messageType) {
        case ServerMessageType.success:
          console.log('success');
          
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
      }
    };
  }

  disconnect = () => {
    this.connection?.close();
  }

  send = (message: ClientMessage) => {
    this.connection?.send(JSON.stringify(message));
  }

  subscribeMarketData = (instrument: Instrument) => {
    this.send({
      messageType: ClientMessageType.subscribeMarketData,
      message: {
        instrument,
      }
    });
  }

  unsubscribeMarketData = (subscriptionId: string) => {
    this.send({
      messageType: ClientMessageType.unsubscribeMarketData,
      message: {
        subscriptionId,
      }
    });
  }

  placeOrder = (instrument: Instrument, side: OrderSide, amount: Decimal, price: Decimal) => {
    this.send({
      messageType: ClientMessageType.placeOrder,
      message: {
        instrument,
        side,
        amount,
        price,
      }
    });
  }
}

export default new WSConnector();

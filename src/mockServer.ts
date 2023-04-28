import { Server, Client } from 'mock-socket';
import { Instrument, OrderSide, OrderStatus, ServerMessageType } from './Enums';
import { Offer } from './Models/ServerMessages';

export class mockServer {
  server: Server | undefined;
  mockUrl: string;
  socket: Client | undefined;
  mockTradeOffers: Offer[] = [
    {
      lastUpdate: this.getDateString(new Date()),
      status: OrderStatus.filled,
      side: OrderSide.buy,
      price: 1,
      amount: 10,
      instrument: Instrument.eur_rub,
    }
  ];

  constructor(url: string) {
    this.mockUrl = url;
  }

  initialise() {
    if(!this.server) {  
      this.server = new Server(this.mockUrl);
    }
    
    this.server?.on('connection', socket => {
      this.socket = socket;
      this.sendMessage(ServerMessageType.tableDataUpdate, this.mockTradeOffers);

      socket.on('message', (message) => {
        console.log('message from client', message);
      });
      
      socket.on('close', () => {});
    
      socket.on('error', () => {});
    });
  }

  private sendMessage(messageType: ServerMessageType, message: any) {
    this.socket?.send(JSON.stringify({messageType, message}));
  }

  private getDateString(date: Date) {
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    const dateString = `${date.getFullYear()}-${month}-${day} ${time}`
  
    return dateString;
  }
}
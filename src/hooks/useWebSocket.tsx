import { useContext } from "react";
import { WSContext } from "../context/WSContext";


export const useWebSocket = () => {
  return useContext(WSContext);
}
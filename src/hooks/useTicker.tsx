import { useContext } from "react";
import { TickerContext } from "../context/TickerContext";

export const useTicker = () => {
  return useContext(TickerContext);
}
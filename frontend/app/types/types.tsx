import { Dispatch, SetStateAction } from "react";

export interface GlobalState {
  themeColor: string
}

export interface GlobalStateContextType {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}
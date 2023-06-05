import { Telephone } from "../models/phone.model";
import { TelephoneState, telephoneReducer } from "../reducers/reducer";
import { useReducer } from "react";

export function UseTelephone() {
  const initialState: TelephoneState = {
    telephone: {
      isCalling: false,
      display: "",
    },
  };

  const [telephoneState, dispatch] = useReducer(telephoneReducer, initialState);
}

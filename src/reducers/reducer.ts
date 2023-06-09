import { Telephone } from "../models/phone.model";
import { TelephoneAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type TelephoneState = {
  telephone: Telephone;
};

export const telephoneReducer = (
  state: TelephoneState,
  action: TelephoneAction
) => {
  let payload: string | boolean | Telephone;
  switch (action.type) {
    case actionTypes.updateDisplay:
      payload = action.payload.display as string;
      return { ...state, telephone: payload };

    case actionTypes.deleteDisplay:
      payload = action.payload as Telephone;
      return { ...state, telephone: payload };

    case actionTypes.updateCalling:
      payload = action.payload.isCalling as boolean;
      return { ...state, telephone: payload };
  }
};

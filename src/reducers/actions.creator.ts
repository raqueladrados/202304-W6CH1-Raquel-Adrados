import { Telephone } from "../models/phone.model";
import { actionTypes } from "../reducers/actions.types";

type Keys = keyof typeof actionTypes;

export type TelephoneAction = {
  type: (typeof actionTypes)[Keys];
  payload: Telephone[];
};

export function updateDisplayTelephoneAction(
  payload: Telephone[]
): TelephoneAction {
  return {
    type: actionTypes.updateDisplay,
    payload,
  };
}

export function deteleDisplayAction(payload: Telephone[]): TelephoneAction {
  return {
    type: actionTypes.deleteDisplay,
    payload,
  };
}

export function updateCallingAction(payload: Telephone[]): TelephoneAction {
  return {
    type: actionTypes.updateCalling,
    payload,
  };
}

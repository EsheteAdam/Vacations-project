import { VacationWithKey } from "../Models/VacationWithKey";

//initial state
export class VacationsState {
  public vacations: VacationWithKey[] = [];
}

//what action i will use
export enum VacationActionType {
  addVacation = "addVacation",
  allVacations = "allVacations",
  deleteVacation = "deleteVacation",
  editVacation = "editVacation",
}

//action data structure
export interface VacationAction {
  type: VacationActionType;
  payload?: any;
}

//which function will run when i will dispatch an action
export const newVacationAction = (
  newVacation: VacationWithKey
): VacationAction => {
  return { type: VacationActionType.addVacation, payload: newVacation };
};

export const allVacationsAction = (
  vacations: VacationWithKey[]
): VacationAction => {
  return { type: VacationActionType.allVacations, payload: vacations };
};

export const editVacationsAction = (
  updatedVacations: VacationWithKey
): VacationAction => {
  return { type: VacationActionType.editVacation, payload: updatedVacations };
};

export const deleteVacationAction = (vacation_key: number): VacationAction => {
  return { type: VacationActionType.deleteVacation, payload: vacation_key };
};

//this is the reducer function
export function VacationReducer(
  currentState: VacationsState = new VacationsState(),
  action: VacationAction
): VacationsState {
  const newState = { ...currentState };
  switch (action.type) {
    case VacationActionType.addVacation:
      newState.vacations = [...currentState.vacations, action.payload];
      break;
    case VacationActionType.allVacations:
      newState.vacations = action.payload;
      break;
    case VacationActionType.editVacation:
      newState.vacations = [...newState.vacations].filter(
        (item) => item.vacation_key !== action.payload.vacation_key
      );
      newState.vacations = [...newState.vacations, action.payload];
      break;
    case VacationActionType.deleteVacation:
      newState.vacations = newState.vacations.filter(
        (vacation) => vacation.vacation_key !== action.payload
      );
      break;
  }
  return newState;
}
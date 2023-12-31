import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import patientReducer, { PatientAction, PatientState } from "./reducers";

export interface RootState {
  patients: PatientState;
}
const rootReducer: Reducer<PatientState, PatientAction> = patientReducer;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

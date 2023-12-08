import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  name: string;
  diseases: string[];
}

export interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [],
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      const { id, name, diseases } = action.payload;
      state.patients.push({ id, name, diseases });
    },
  },
});

export const { addPatient } = patientSlice.actions;

export type PatientAction = ReturnType<typeof addPatient>;

export default patientSlice.reducer;

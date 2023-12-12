import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  name: string;
  birthDay: string;
  diseases: string[];
  heightData: { date: string; value: string }[];
  weightData: { date: string; value: string }[];
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
      const { id, name, birthDay, diseases, heightData, weightData } =
        action.payload;
      state.patients.push({
        id,
        name,
        birthDay,
        diseases,
        heightData,
        weightData,
      });
    },
    deletePatient: (state, action: PayloadAction<string>) => {
      const patientId = action.payload;
      state.patients = state.patients.filter(
        (patient) => patient.id !== patientId
      );
    },
  },
});

export const { addPatient, deletePatient } = patientSlice.actions;

export type PatientAction = ReturnType<typeof addPatient>;

export default patientSlice.reducer;

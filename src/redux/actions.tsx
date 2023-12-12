const ADD_PATIENT = "ADD_PATIENT";
const DELETE_PATIENT = "DELETE_PATIENT";

export const addPatient = (patient: {
  id: string;
  name: string;
  birthDay: string;
  diseases: string[];
  heightData: { date: string; value: string }[];
  weightData: { date: string; value: string }[];
}): any => ({
  type: ADD_PATIENT,
  payload: patient,
});

export const deletePatient = (patientId: number) => ({
  type: DELETE_PATIENT,
  payload: {
    patientId,
  },
});

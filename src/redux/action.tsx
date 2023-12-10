export const ADD_PATIENT = "ADD_PATIENT";

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

export const ADD_PATIENT = "ADD_PATIENT";

export const addPatient = (patient: {
  id: string;
  name: string;
  diseases: string[];
}): any => ({
  type: ADD_PATIENT,
  payload: patient,
});

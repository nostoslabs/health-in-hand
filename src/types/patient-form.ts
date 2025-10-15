export interface PatientFormData {
  patientName: string;
  date: string;
  chiefConcerns: string;
  medicationsSupplements: string;
  dietary: {
    day1: {
      breakfast: string;
      morningSnacks: string;
      lunch: string;
      afternoonSnacks: string;
      dinner: string;
      eveningSnacks: string;
    };
    day2: {
      breakfast: string;
      morningSnacks: string;
      lunch: string;
      afternoonSnacks: string;
      dinner: string;
      eveningSnacks: string;
    };
  };
}

export const initialFormData: PatientFormData = {
  patientName: "",
  date: new Date().toISOString().split("T")[0] || "",
  chiefConcerns: "",
  medicationsSupplements: "",
  dietary: {
    day1: {
      breakfast: "",
      morningSnacks: "",
      lunch: "",
      afternoonSnacks: "",
      dinner: "",
      eveningSnacks: "",
    },
    day2: {
      breakfast: "",
      morningSnacks: "",
      lunch: "",
      afternoonSnacks: "",
      dinner: "",
      eveningSnacks: "",
    },
  },
};

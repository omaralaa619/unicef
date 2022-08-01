import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
    ref: "User",
  },

  //  البيانات الأساسية
  inChargeName: {
    type: String,
  },
  institutionName: {
    type: String,
  },
  institutionType: {
    type: String,
  },
  institutionAdress: {
    type: String,
  },
  geographicAreaCovered: {
    type: String,
  },
  contactInfoPerson1Name: {
    type: String,
  },
  contactInfoPerson1Number: {
    type: String,
  },
  contactInfoPerson1LandNumber: {
    type: String,
  },
  contactInfoPerson1Email: {
    type: String,
  },
  contactInfoPerson2Number: {
    type: String,
  },
  contactInfoPerson2LandNumber: {
    type: String,
  },
  contactInfoPerson2Email: {
    type: String,
  },
  workedSince: {
    type: String,
  },
  ///////

  // الفئات المتاح لها الخدمة

  ageRange1: {
    type: String,
  },
  ageRange2: {
    type: String,
  },
  ageRange3: {
    type: String,
  },
  sex: {
    type: String,
  },
  nationality: {
    type: String,
  },
  disability: {
    type: String,
  },
  disabilityType: {
    type: String,
  },

  doubleDisability: {
    type: String,
  },
  emergencyCases: {
    type: String,
  },
  /////

  //معلومات إضافية عن الخدمة
  serviceIsFree: {
    type: String,
  },
  servicePrice: {
    type: String,
  },
  serviceDays: {
    type: String,
  },
  serviceHours: {
    type: String,
  },
  emergencyHours: {
    type: String,
  },

  //الخدمات الإجتماعية/الدعم النفسي الإجتماعي
  serviceProviderPsyc: {
    type: String,
  },
  serviveTypePhsyc: {
    type: String,
  },
  serviveTypePhsycOther: {
    type: String,
  },

  //الخدمات القانونية والأمنية
  serviceProviderSec: {
    type: String,
  },
  serviveTypeSec: {
    type: String,
  },
  serviveTypeSecOther: {
    type: String,
  },

  // الخدمات الدعم الصحي

  serviceProvidermed: {
    type: String,
  },
  serviveTypemed: {
    type: String,
  },
  serviveTypemedOther: {
    type: String,
  },

  //امتطلبات واجراءات الحصول على الخدمة

  terms: {
    type: String,
  },
  documentsRequired: {
    type: String,
  },
  basicActions: {
    type: String,
  },
});

const Entry = mongoose.model("Entry", userSchema);

export default Entry;

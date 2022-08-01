const mysrting = `inChargeName institutionName institutionType institutionAdress geographicAreaCovered contactInfoPerson1Name contactInfoPerson1Number contactInfoPerson1LandNumber contactInfoPerson1Email contactInfoPerson2Number contactInfoPerson2LandNumber contactInfoPerson2Email workedSince ageRange1 ageRange2 ageRange3 sex nationality disability disabilityType doubleDisability emergencyCases serviceIsFree servicePrice serviceDays serviceHours emergencyHours serviceProviderPsyc serviveTypePhsyc serviveTypePhsycOther serviceProviderSec serviveTypeSec serviveTypeSecOther serviceProvidermed serviveTypemed serviveTypemedOther terms documentsRequired basicActions`;
const mysrting1 = `institutionType institutionAdress geographicAreaCovered contactInfoPerson1Name contactInfoPerson1Number contactInfoPerson1LandNumber contactInfoPerson1Email contactInfoPerson2Number contactInfoPerson2LandNumber contactInfoPerson2Email workedSince ageRange1 ageRange2 ageRange3 sex nationality disability disabilityType doubleDisability serviceIsFree servicePrice serviceDays serviceHours emergencyHours serviceProviderPsyc serviveTypePhsyc serviveTypePhsycOther serviceProviderSec serviveTypeSec serviveTypeSecOther serviceProvidermed serviveTypemed serviveTypemedOther terms documentsRequired basicActions`;

const myfun = (string) => {
  const myarr = string.split(" ");
  console.log(myarr);

  for (let i = 0; i < myarr.length; i++) {
    console.log(`${myarr[i]},`);
  }
};

myfun(mysrting);

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import classes from "./NewEntryScreen.module.css";
import TextField from "@mui/material/TextField";

const NewEntryScreen = (props) => {
  //  البيانات الأساسية
  const [institutionName, setinstitutionName] = useState("");
  const [inChargeName, setinchargeName] = useState("");
  const [institutionType, setinstitutionType] = useState("");

  const [institutionAdress, setinstitutionAdress] = useState("");
  const [geographicAreaCovered, setgeographicAreaCovered] = useState("");
  const [contactInfoPerson1Name, setcontactInfoPerson1Name] = useState("");
  const [contactInfoPerson1Number, setcontactInfoPerson1Number] = useState("");
  const [contactInfoPerson1LandNumber, setcontactInfoPerson1LandNumber] =
    useState("");
  const [contactInfoPerson1Email, setcontactInfoPerson1Email] = useState("");
  const [contactInfoPerson2Number, setcontactInfoPerson2Number] = useState("");
  const [contactInfoPerson2LandNumber, setcontactInfoPerson2LandNumber] =
    useState("");
  const [contactInfoPerson2Email, setcontactInfoPerson2Email] = useState("");
  const [workedSince, setworkedSince] = useState("");
  //////////////////////////////////////////////////////////////////////////

  // الفئات المتاح لها الخدمة

  const [ageRange1, setageRange1] = useState("");
  const [ageRange2, setageRange2] = useState("");
  const [ageRange3, setageRange3] = useState("");
  const [sex, setsex] = useState("");
  const [nationality, setnationality] = useState("");
  const [disability, setdisability] = useState("");
  const [disabilityType, setdisabilityType] = useState("");
  const [doubleDisability, setdoubleDisability] = useState("");
  const [emergencyCases, setemergencyCases] = useState("");
  //////////////////////////////////////////////////////////

  //معلومات إضافية عن الخدمة
  const [serviceIsFree, setserviceIsFree] = useState("");
  const [servicePrice, setservicePrice] = useState("");
  const [serviceDays, setserviceDays] = useState("");
  const [serviceHours, setserviceHours] = useState("");
  const [emergencyHours, setemergencyHours] = useState("");
  ///////////////////////////////////

  //الخدمات الإجتماعية/الدعم النفسي الإجتماعي
  const [serviceProviderPsyc, setserviceProviderPsyc] = useState("");
  const [serviveTypePhsyc, setserviveTypePhsyc] = useState("");
  const [serviveTypePhsycOther, setserviveTypePhsycOther] = useState("");
  /////////////////////////////////

  //الخدمات القانونية والأمنية
  const [serviceProviderSec, setserviceProviderSec] = useState("");
  const [serviveTypeSec, setserviveTypeSec] = useState("");
  const [serviveTypeSecOther, setserviveTypeSecOther] = useState("");
  /////////////////////////////////

  // الخدمات الدعم الصحي
  const [serviceProvidermed, setserviceProvidermed] = useState("");
  const [serviveTypemed, setserviveTypemed] = useState("");
  const [serviveTypemedOther, setserviveTypemedOther] = useState("");
  ///////////////////

  //امتطلبات واجراءات الحصول على الخدمة
  const [terms, setterms] = useState("");
  const [documentsRequired, setdocumentsRequired] = useState("");
  const [basicActions, setbasicActions] = useState("");
  //////////////

  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`api/entries`, {
        inChargeName,
        institutionName,
        institutionType,
        institutionAdress,
        geographicAreaCovered,
        contactInfoPerson1Name,
        contactInfoPerson1Number,
        contactInfoPerson1LandNumber,
        contactInfoPerson1Email,
        contactInfoPerson2Number,
        contactInfoPerson2LandNumber,
        contactInfoPerson2Email,
        workedSince,
        ageRange1,
        ageRange2,
        ageRange3,
        sex,
        nationality,
        disability,
        disabilityType,
        doubleDisability,
        emergencyCases,
        serviceIsFree,
        servicePrice,
        serviceDays,
        serviceHours,
        emergencyHours,
        serviceProviderPsyc,
        serviveTypePhsyc,
        serviveTypePhsycOther,
        serviceProviderSec,
        serviveTypeSec,
        serviveTypeSecOther,
        serviceProvidermed,
        serviveTypemed,
        serviveTypemedOther,
        terms,
        documentsRequired,
        basicActions,
      });

      const entryId = data._id;

      props.setCreated(true);

      navigate(`/entry/${entryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="institutionName">اسم الجهة</label>
        <TextField
          type="text"
          id="institutionName"
          value={institutionName}
          size="small"
          margin="normal"
          onChange={(e) => setinstitutionName(e.target.value)}
        />

        <label htmlFor="inChargeName">اسم المقرر</label>
        <TextField
          type="text"
          id="inChargeName"
          size="small"
          margin="dense"
          value={inChargeName}
          onChange={(e) => setinchargeName(e.target.value)}
        />

        <label htmlFor="emergencyCases">
          هل تقدم الجهة خدماتها للحالات الطارئة مثل:حالات الإغتصاب وهتك العرض
          والتحرش والتعذيب وإساءة المعاملة والإيذاء
        </label>

        <div onChange={(e) => setemergencyCases(e.target.value)}>
          <input type="radio" name="emergencyCases" value="لا" />
          نعم
          <input type="radio" name="emergencyCases" value="نعم" />
          لا
        </div>

        <label htmlFor="institutionType"></label>
        <TextField
          type="text"
          id="institutionType"
          value={institutionType}
          size="small"
          margin="normal"
          onChange={(e) => setinstitutionType(e.target.value)}
        />
        <label htmlFor="institutionAdress"></label>
        <TextField
          type="text"
          id="institutionAdress"
          value={institutionAdress}
          size="small"
          margin="normal"
          onChange={(e) => setinstitutionAdress(e.target.value)}
        />
        <label htmlFor="geographicAreaCovered"></label>
        <TextField
          type="text"
          id="geographicAreaCovered"
          value={geographicAreaCovered}
          size="small"
          margin="normal"
          onChange={(e) => setgeographicAreaCovered(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1Name"></label>
        <TextField
          type="text"
          id="contactInfoPerson1Name"
          value={contactInfoPerson1Name}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1Name(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1Number"></label>
        <TextField
          type="text"
          id="contactInfoPerson1Number"
          value={contactInfoPerson1Number}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1Number(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1LandNumber"></label>
        <TextField
          type="text"
          id="contactInfoPerson1LandNumber"
          value={contactInfoPerson1LandNumber}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1LandNumber(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1Email"></label>
        <TextField
          type="text"
          id="contactInfoPerson1Email"
          value={contactInfoPerson1Email}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1Email(e.target.value)}
        />
        <label htmlFor="contactInfoPerson2Number"></label>
        <TextField
          type="text"
          id="contactInfoPerson2Number"
          value={contactInfoPerson2Number}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson2Number(e.target.value)}
        />
        <label htmlFor="contactInfoPerson2LandNumber"></label>
        <TextField
          type="text"
          id="contactInfoPerson2LandNumber"
          value={contactInfoPerson2LandNumber}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson2LandNumber(e.target.value)}
        />
        <label htmlFor="contactInfoPerson2Email"></label>
        <TextField
          type="text"
          id="contactInfoPerson2Email"
          value={contactInfoPerson2Email}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson2Email(e.target.value)}
        />
        <label htmlFor="workedSince"></label>
        <TextField
          type="text"
          id="workedSince"
          value={workedSince}
          size="small"
          margin="normal"
          onChange={(e) => setworkedSince(e.target.value)}
        />
        <label htmlFor="ageRange1"></label>
        <TextField
          type="text"
          id="ageRange1"
          value={ageRange1}
          size="small"
          margin="normal"
          onChange={(e) => setageRange1(e.target.value)}
        />
        <label htmlFor="ageRange2"></label>
        <TextField
          type="text"
          id="ageRange2"
          value={ageRange2}
          size="small"
          margin="normal"
          onChange={(e) => setageRange2(e.target.value)}
        />
        <label htmlFor="ageRange3"></label>
        <TextField
          type="text"
          id="ageRange3"
          value={ageRange3}
          size="small"
          margin="normal"
          onChange={(e) => setageRange3(e.target.value)}
        />
        <label htmlFor="sex"></label>
        <TextField
          type="text"
          id="sex"
          value={sex}
          size="small"
          margin="normal"
          onChange={(e) => setsex(e.target.value)}
        />
        <label htmlFor="nationality"></label>
        <TextField
          type="text"
          id="nationality"
          value={nationality}
          size="small"
          margin="normal"
          onChange={(e) => setnationality(e.target.value)}
        />
        <label htmlFor="disability"></label>
        <TextField
          type="text"
          id="disability"
          value={disability}
          size="small"
          margin="normal"
          onChange={(e) => setdisability(e.target.value)}
        />
        <label htmlFor="disabilityType"></label>
        <TextField
          type="text"
          id="disabilityType"
          value={disabilityType}
          size="small"
          margin="normal"
          onChange={(e) => setdisabilityType(e.target.value)}
        />
        <label htmlFor="doubleDisability"></label>
        <TextField
          type="text"
          id="doubleDisability"
          value={doubleDisability}
          size="small"
          margin="normal"
          onChange={(e) => setdoubleDisability(e.target.value)}
        />
        <label htmlFor="serviceIsFree"></label>
        <TextField
          type="text"
          id="serviceIsFree"
          value={serviceIsFree}
          size="small"
          margin="normal"
          onChange={(e) => setserviceIsFree(e.target.value)}
        />
        <label htmlFor="servicePrice"></label>
        <TextField
          type="text"
          id="servicePrice"
          value={servicePrice}
          size="small"
          margin="normal"
          onChange={(e) => setservicePrice(e.target.value)}
        />
        <label htmlFor="serviceDays"></label>
        <TextField
          type="text"
          id="serviceDays"
          value={serviceDays}
          size="small"
          margin="normal"
          onChange={(e) => setserviceDays(e.target.value)}
        />
        <label htmlFor="serviceHours"></label>
        <TextField
          type="text"
          id="serviceHours"
          value={serviceHours}
          size="small"
          margin="normal"
          onChange={(e) => setserviceHours(e.target.value)}
        />
        <label htmlFor="emergencyHours"></label>
        <TextField
          type="text"
          id="emergencyHours"
          value={emergencyHours}
          size="small"
          margin="normal"
          onChange={(e) => setemergencyHours(e.target.value)}
        />
        <label htmlFor="serviceProviderPsyc"></label>
        <TextField
          type="text"
          id="serviceProviderPsyc"
          value={serviceProviderPsyc}
          size="small"
          margin="normal"
          onChange={(e) => setserviceProviderPsyc(e.target.value)}
        />
        <label htmlFor="serviveTypePhsyc"></label>
        <TextField
          type="text"
          id="serviveTypePhsyc"
          value={serviveTypePhsyc}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypePhsyc(e.target.value)}
        />
        <label htmlFor="serviveTypePhsycOther"></label>
        <TextField
          type="text"
          id="serviveTypePhsycOther"
          value={serviveTypePhsycOther}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypePhsycOther(e.target.value)}
        />
        <label htmlFor="serviceProviderSec"></label>
        <TextField
          type="text"
          id="serviceProviderSec"
          value={serviceProviderSec}
          size="small"
          margin="normal"
          onChange={(e) => setserviceProviderSec(e.target.value)}
        />
        <label htmlFor="serviveTypeSec"></label>
        <TextField
          type="text"
          id="serviveTypeSec"
          value={serviveTypeSec}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypeSec(e.target.value)}
        />
        <label htmlFor="serviveTypeSecOther"></label>
        <TextField
          type="text"
          id="serviveTypeSecOther"
          value={serviveTypeSecOther}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypeSecOther(e.target.value)}
        />
        <label htmlFor="serviceProvidermed"></label>
        <TextField
          type="text"
          id="serviceProvidermed"
          value={serviceProvidermed}
          size="small"
          margin="normal"
          onChange={(e) => setserviceProvidermed(e.target.value)}
        />
        <label htmlFor="serviveTypemed"></label>
        <TextField
          type="text"
          id="serviveTypemed"
          value={serviveTypemed}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypemed(e.target.value)}
        />
        <label htmlFor="serviveTypemedOther"></label>
        <TextField
          type="text"
          id="serviveTypemedOther"
          value={serviveTypemedOther}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypemedOther(e.target.value)}
        />
        <label htmlFor="terms"></label>
        <TextField
          type="text"
          id="terms"
          value={terms}
          size="small"
          margin="normal"
          onChange={(e) => setterms(e.target.value)}
        />
        <label htmlFor="documentsRequired"></label>
        <TextField
          type="text"
          id="documentsRequired"
          value={documentsRequired}
          size="small"
          margin="normal"
          onChange={(e) => setdocumentsRequired(e.target.value)}
        />
        <label htmlFor="basicActions"></label>
        <TextField
          type="text"
          id="basicActions"
          value={basicActions}
          size="small"
          margin="normal"
          onChange={(e) => setbasicActions(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default NewEntryScreen;

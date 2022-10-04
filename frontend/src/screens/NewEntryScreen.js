import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import classes from "./NewEntryScreen.module.css";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

  const [isDisability, setIsDisabilty] = useState(false);

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
        <p className={classes.title}>إنشاء بيانات جديدة</p>
        {/*       ////////////  البيانات الأساسية  //////////////// */}
        <p className={classes.sub}>:البيانات الأساسية</p>
        <label htmlFor="institutionName">اسم الجهة</label>
        <TextField
          type="text"
          autoComplete="off"
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
        <FormControl>
          <label>
            هل تقدم الجهة خدماتها للحالات الطارئة مثل:حالات الإغتصاب وهتك العرض
            والتحرش والتعذيب وإساءة المعاملة والإيذاء
          </label>
          <RadioGroup
            onChange={(e) => setemergencyCases(e.target.value)}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
            <FormControlLabel value="لا" control={<Radio />} label="لا" />
          </RadioGroup>
        </FormControl>
        <label htmlFor="institutionType">تصنيف تبعية الجهة</label>
        <TextField
          type="text"
          id="institutionType"
          value={institutionType}
          size="small"
          margin="normal"
          onChange={(e) => setinstitutionType(e.target.value)}
        />
        <label htmlFor="institutionAdress">عنوان الجهة</label>
        <TextField
          type="text"
          id="institutionAdress"
          value={institutionAdress}
          size="small"
          margin="normal"
          onChange={(e) => setinstitutionAdress(e.target.value)}
        />
        <label htmlFor="geographicAreaCovered">
          لمناطق الجغرافية التي تغطيها الجهة بالخدمات
        </label>
        <TextField
          type="text"
          id="geographicAreaCovered"
          value={geographicAreaCovered}
          size="small"
          margin="normal"
          onChange={(e) => setgeographicAreaCovered(e.target.value)}
        />
        {/*    */}
        <p className={classes.sub}>:بيانات مسئول الإتصال (1) </p>
        <label htmlFor="contactInfoPerson1Name">الإسم </label>
        <TextField
          type="text"
          id="contactInfoPerson1Name"
          value={contactInfoPerson1Name}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1Name(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1Number">رقم الموبايل</label>
        <TextField
          type="text"
          id="contactInfoPerson1Number"
          value={contactInfoPerson1Number}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1Number(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1LandNumber">التليفون الأرضي</label>
        <TextField
          type="text"
          id="contactInfoPerson1LandNumber"
          value={contactInfoPerson1LandNumber}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1LandNumber(e.target.value)}
        />
        <label htmlFor="contactInfoPerson1Email">
          البريد الإلكترونى إن وجد
        </label>
        <TextField
          type="text"
          id="contactInfoPerson1Email"
          value={contactInfoPerson1Email}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson1Email(e.target.value)}
        />
        <p className={classes.sub}>:بيانات مسئول الإتصال (2) </p>
        <label htmlFor="contactInfoPerson2Number">رقم الموبايل</label>
        <TextField
          type="text"
          id="contactInfoPerson2Number"
          value={contactInfoPerson2Number}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson2Number(e.target.value)}
        />
        <label htmlFor="contactInfoPerson2LandNumber">التليفون الأرضي</label>
        <TextField
          type="text"
          id="contactInfoPerson2LandNumber"
          value={contactInfoPerson2LandNumber}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson2LandNumber(e.target.value)}
        />
        <label htmlFor="contactInfoPerson2Email">
          البريد الإلكترونى إن وجد
        </label>
        <TextField
          type="text"
          id="contactInfoPerson2Email"
          value={contactInfoPerson2Email}
          size="small"
          margin="normal"
          onChange={(e) => setcontactInfoPerson2Email(e.target.value)}
        />
        <label htmlFor="workedSince">
          خبرة الجهة في تقديم تلك الخدمة (عدد سنوات الخبرة)
        </label>
        <TextField
          type="text"
          id="workedSince"
          value={workedSince}
          size="small"
          margin="normal"
          onChange={(e) => setworkedSince(e.target.value)}
        />

        {/* ////////////////// الفئات المتاح لها الخدمة /////////////////////////  */}
        <p className={classes.sub}>:الفئات المتاح لها الخدمة </p>
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
        <FormControl>
          <label>الجنس</label>
          <RadioGroup
            onChange={(e) => setsex(e.target.value)}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <FormControlLabel value="ذكور" control={<Radio />} label="ذكور" />
            <FormControlLabel value="اناث" control={<Radio />} label="اناث" />
            <FormControlLabel
              value="ذكور واناث معا"
              control={<Radio />}
              label="ذكور واناث معا"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <label>الجنسية</label>
          <RadioGroup
            onChange={(e) => setnationality(e.target.value)}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <FormControlLabel
              value="مصرببن فقط"
              control={<Radio />}
              label="مصرببن فقط"
            />
            <FormControlLabel
              value="مصريين وغير مصريين"
              control={<Radio />}
              label="مصريين وغير مصريين"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <label>ذوي إعاقة</label>
          <RadioGroup
            onChange={(e) => {
              setdisability(e.target.value);
              if (e.target.value === "نعم") {
                setIsDisabilty(true);
              } else {
                setIsDisabilty(false);
              }
            }}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
            <FormControlLabel value="لا" control={<Radio />} label="لا" />
          </RadioGroup>
        </FormControl>

        {isDisability && (
          <>
            {" "}
            <label htmlFor="disabilityType">
              فى حالة الإجابة بـ (نعم) برجاء تحديد نوع الإعاقة التى تتعامل معها
              الجهة
            </label>
            <TextField
              type="text"
              id="disabilityType"
              value={disabilityType}
              size="small"
              margin="normal"
              onChange={(e) => setdisabilityType(e.target.value)}
            />
          </>
        )}

        {isDisability && (
          <>
            <label htmlFor="doubleDisability"> إعاقة مزدوجة (تُذكر )</label>
            <TextField
              type="text"
              id="doubleDisability"
              value={doubleDisability}
              size="small"
              margin="normal"
              onChange={(e) => setdoubleDisability(e.target.value)}
            />
          </>
        )}

        {/*     //معلومات إضافية عن الخدمة ////////////    */}
        <p className={classes.sub}>:الفئات المتاح لها الخدمة </p>
        <label htmlFor="serviceIsFree">تكلفة الخدمة</label>
        <TextField
          type="text"
          id="serviceIsFree"
          value={serviceIsFree}
          size="small"
          margin="normal"
          onChange={(e) => setserviceIsFree(e.target.value)}
        />
        <label htmlFor="servicePrice">
          في حالة خدمة مدفوعة الاجر، برجاء ذكر القيمة
        </label>
        <TextField
          type="text"
          id="servicePrice"
          value={servicePrice}
          size="small"
          margin="normal"
          onChange={(e) => setservicePrice(e.target.value)}
        />
        <label htmlFor="serviceDays">ايام تقديم الخدمة</label>
        <TextField
          type="text"
          id="serviceDays"
          value={serviceDays}
          size="small"
          margin="normal"
          onChange={(e) => setserviceDays(e.target.value)}
        />
        <label htmlFor="serviceHours">ساعات تقديم الخدمة (من /الي)</label>
        <TextField
          type="text"
          id="serviceHours"
          value={serviceHours}
          size="small"
          margin="normal"
          onChange={(e) => setserviceHours(e.target.value)}
        />
        <label htmlFor="emergencyHours">
          المواعيد المخصصة لإستقبال الحالات الطارئة
        </label>
        <TextField
          type="text"
          id="emergencyHours"
          value={emergencyHours}
          size="small"
          margin="normal"
          onChange={(e) => setemergencyHours(e.target.value)}
        />
        <p className={classes.sub}>
          :الخدمات الإجتماعية/الدعم النفسي الإجتماعي
        </p>
        <label htmlFor="serviceProviderPsyc">مقدم الخدمة</label>
        <TextField
          type="text"
          id="serviceProviderPsyc"
          value={serviceProviderPsyc}
          size="small"
          margin="normal"
          onChange={(e) => setserviceProviderPsyc(e.target.value)}
        />
        <label htmlFor="serviveTypePhsyc">الخدمات التي يتم تقديمها</label>
        <TextField
          type="text"
          id="serviveTypePhsyc"
          value={serviveTypePhsyc}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypePhsyc(e.target.value)}
        />
        <label htmlFor="serviveTypePhsycOther">اخري</label>
        <TextField
          type="text"
          id="serviveTypePhsycOther"
          value={serviveTypePhsycOther}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypePhsycOther(e.target.value)}
        />
        <p className={classes.sub}>:الخدمات القانونية والأمنية</p>
        <label htmlFor="serviceProviderSec">مقدم الخدمة</label>
        <TextField
          type="text"
          id="serviceProviderSec"
          value={serviceProviderSec}
          size="small"
          margin="normal"
          onChange={(e) => setserviceProviderSec(e.target.value)}
        />
        <label htmlFor="serviveTypeSec">الخدمات التي يتم تقديمها</label>
        <TextField
          type="text"
          id="serviveTypeSec"
          value={serviveTypeSec}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypeSec(e.target.value)}
        />
        <label htmlFor="serviveTypeSecOther">اخري</label>
        <TextField
          type="text"
          id="serviveTypeSecOther"
          value={serviveTypeSecOther}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypeSecOther(e.target.value)}
        />
        <p className={classes.sub}>:الخدمات الدعم الصحي</p>
        <label htmlFor="serviceProvidermed">مقدم الخدمة</label>
        <TextField
          type="text"
          id="serviceProvidermed"
          value={serviceProvidermed}
          size="small"
          margin="normal"
          onChange={(e) => setserviceProvidermed(e.target.value)}
        />
        <label htmlFor="serviveTypemed">الخدمات التي يتم تقديمها</label>
        <TextField
          type="text"
          id="serviveTypemed"
          value={serviveTypemed}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypemed(e.target.value)}
        />
        <label htmlFor="serviveTypemedOther">اخري</label>
        <TextField
          type="text"
          id="serviveTypemedOther"
          value={serviveTypemedOther}
          size="small"
          margin="normal"
          onChange={(e) => setserviveTypemedOther(e.target.value)}
        />
        <p className={classes.sub}>:متطلبات واجراءات الحصول على الخدمة</p>
        <label htmlFor="terms">الشروط</label>
        <TextField
          type="text"
          id="terms"
          value={terms}
          size="small"
          margin="normal"
          onChange={(e) => setterms(e.target.value)}
        />
        <label htmlFor="documentsRequired">المستندات المطلوبة</label>
        <TextField
          type="text"
          id="documentsRequired"
          value={documentsRequired}
          size="small"
          margin="normal"
          onChange={(e) => setdocumentsRequired(e.target.value)}
        />
        <label htmlFor="basicActions">
          الإجراءات الأساسية (ما هى الخطوات التى يجب إتخاذها قبل وأثناء وبعد
          الحصول على الخدمة؟)
        </label>
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

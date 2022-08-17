import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import classes from "./EntryScreen.module.css";

const EntryScreen = () => {
  const [entry, setEntry] = useState({});

  let match = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      const { data } = await axios.get(`/api/entries/${match.id}`);
      console.log(match.id);
      setEntry(data);
    };
    fetchEntry();
  }, [match.id, setEntry]);

  return (
    /*
    <Link to={`/`}>
      <button>back</button>
    </Link>
      
      <div className={classes.container}>
      <div className={classes.info}>
      <div className={classes.left}>
          

          <div className={classes.single}>
            <span>:المحافظة</span>
            <p>الاسكندرية</p>
          </div>

          <div className={classes.single}>
            <span>:المركز/الحى</span>
            <p>المنتزة اول</p>
          </div>
          
          <div className={classes.single}>
            <span>:لمناطق الجغرافية التي تغطيها الجهة بالخدمات</span>
            <p>{entry.geographicAreaCovered}</p>
          </div>

          <div className={classes.single}>
            <span>:الإسم</span>
            <p>ايناس احمد</p>
          </div>
          <div className={classes.single}>
            <span>:رقم الموبايل</span>
            <p>{entry.contactInfoPerson2Number}</p>
          </div>
          <div className={classes.single}>
            <span>:التليفون الأرضي</span>
            <p>{entry.contactInfoPerson2LandNumber}</p>
          </div>
          <div className={classes.single}>
            <span>:البريد الإلكترونى إن وجد</span>
            <p>{entry.contactInfoPerson2Email}</p>
          </div>
          <div className={classes.single}>
            <span>:خبرة الجهة في تقديم تلك الخدمة (عدد سنوات الخبرة)</span>
            <p>{entry.workedSince}</p>
          </div>
        </div>

        <div className={classes.right}>
        
        <div className={classes.single}>
            <span>:اسم المقرر</span>
            <p>{entry.inChargeName}</p>
          </div>

          <div className={classes.single}>
          <span>:تصنيف تبعية الجهة</span>
            <p>{entry.institutionType}</p>
          </div>

          <div className={classes.single}>
            <span>:عنوان الجهة</span>
            <p>{entry.institutionAdress}</p>
          </div>

          
          </div>
          </div>
            </div>
            */
    <div className={classes.container}>
      {/*/////////////////////// البيانات الأساسية 	//////////////////////*/}
      <h1>{entry.institutionName}</h1>

      <h2> :البيانات الأساسية</h2>

      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>المحافظة</span>
            <p>الاسكندرية</p>
          </div>

          <div className={classes.single}>
            <span>المركز/الحى</span>
            <p>المنتزة اول</p>
          </div>

          <div className={classes.single}>
            <span>لمناطق الجغرافية التي تغطيها الجهة بالخدمات</span>
            <p>{entry.geographicAreaCovered}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>اسم المقرر</span>
            <p>{entry.inChargeName}</p>
          </div>

          <div className={classes.single}>
            <span>تصنيف تبعية الجهة</span>
            <p>{entry.institutionType}</p>
          </div>

          <div className={classes.single}>
            <span>عنوان الجهة</span>
            <p>{entry.institutionAdress}</p>
          </div>
        </div>
      </div>

      {/*/////////////////////// بيانات مسئول الإتصال (1)	 -البيانات الأساسية 	//////////////////////*/}
      <h2> :بيانات مسئول الإتصال (1)</h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:الإسم</span>
            <p>{entry.contactInfoPerson1Name}</p>
          </div>

          <div className={classes.single}>
            <span>:رقم الموبايل </span>
            <p>{entry.contactInfoPerson1Number}</p>
          </div>
        </div>
        <div className={classes.left}>
          <div className={classes.single}>
            <span>:التليفون الأرضي </span>
            <p>{entry.contactInfoPerson1LandNumber}</p>
          </div>
          <div className={classes.single}>
            <span>:البريد الإلكترونى إن وجد</span>
            <p>{entry.contactInfoPerson1Email}</p>
          </div>
        </div>
      </div>

      {/*/////////////////////// بيانات مسئول الإتصال (2)	 -البيانات الأساسية 	//////////////////////*/}
      <h2> :بيانات مسئول الإتصال (2)</h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:الإسم</span>
            <p>{entry.contactInfoPerson2Name}</p>
          </div>

          <div className={classes.single}>
            <span>:رقم الموبايل </span>
            <p>{entry.contactInfoPerson2Number}</p>
          </div>
        </div>
        <div className={classes.left}>
          <div className={classes.single}>
            <span>:التليفون الأرضي </span>
            <p>{entry.contactInfoPerson2LandNumber}</p>
          </div>
          <div className={classes.single}>
            <span>:البريد الإلكترونى إن وجد</span>
            <p>{entry.contactInfoPerson2Email}</p>
          </div>
        </div>
      </div>

      {/*//////////////////////               الفئات المتاح لها الخدمة 										/////////////////////*/}
      <h2> الفئات المتاح لها الخدمة </h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:السن</span>
            <p>{entry.ageRange1}</p>
            <p>{entry.ageRange2}</p>
            <p>{entry.ageRange3}</p>
          </div>

          <div className={classes.single}>
            <span>:الجنس</span>
            <p>{entry.sex}</p>
          </div>

          <div className={classes.single}>
            <span>: إعاقة مزدوجة</span>
            <p>{entry.doubleDisability}</p>
          </div>

          <div className={classes.single}>
            <span>
              : هل تقدم الجهة خدماتها للحالات الطارئة مثل:حالات الإغتصاب وهتك
              العرض والتحرش والتعذيب وإساءة المعاملة والإيذاء
            </span>
            <p>{entry.emergencyCases}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>:الجنسية</span>
            <p>{entry.nationality}</p>
          </div>
          <div className={classes.single}>
            <span>:ذوي إعاقة</span>
            <p>{entry.disability}</p>
          </div>
          <div className={classes.single}>
            <span>: برجاء تحديد نوع الإعاقة التى تتعامل معها الجهة</span>
            <p>{entry.disabilityType}</p>
          </div>
        </div>
      </div>

      {/*//////////////////////               معلومات إضافية عن الخدمة 																	/////////////////////*/}
      <h2> معلومات إضافية عن الخدمة </h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:تكلفة الخدمة</span>
            <p>{entry.serviceIsFree}</p>
          </div>

          <div className={classes.single}>
            <span>:في حالة خدمة مدفوعة الاجر، برجاء ذكر القيمة</span>
            <p>{entry.servicePrice}</p>
          </div>

          <div className={classes.single}>
            <span>: المواعيد المخصصة لإستقبال الحالات الطارئة</span>
            <p>{entry.emergencyHours}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>:ايام تقديم الخدمة</span>
            <p>{entry.serviceDays}</p>
          </div>
          <div className={classes.single}>
            <span>: ساعات تقديم الخدمة (من /الي)</span>
            <p>{entry.serviceHours}</p>
          </div>
        </div>
      </div>

      {/*//////////////////////               الخدمات الإجتماعية/الدعم النفسي الإجتماعي																			/////////////////////*/}
      <h2> الخدمات الإجتماعية/الدعم النفسي الإجتماعي </h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:مقدم الخدمة</span>
            <p>{entry.serviceProviderPsyc}</p>
          </div>

          <div className={classes.single}>
            <span>:الخدمات التي يتم تقديمها</span>
            <p>{entry.serviveTypePhsyc}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>:اخري</span>
            <p>{entry.serviveTypePhsycOther}</p>
          </div>
        </div>
      </div>

      {/*//////////////////////               الخدمات القانونية والأمنية																				/////////////////////*/}
      <h2> الخدمات القانونية والأمنية </h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:مقدم الخدمة</span>
            <p>{entry.serviceProviderSec}</p>
          </div>

          <div className={classes.single}>
            <span>:الخدمات التي يتم تقديمها</span>
            <p>{entry.serviveTypeSec}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>:اخري</span>
            <p>{entry.serviveTypeSecOther}</p>
          </div>
        </div>
      </div>

      {/*//////////////////////             الخدمات الدعم الصحي																					/////////////////////*/}
      <h2> الخدمات الدعم الصحي </h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:مقدم الخدمة</span>
            <p>{entry.serviceProvidermed}</p>
          </div>

          <div className={classes.single}>
            <span>:الخدمات التي يتم تقديمها</span>
            <p>{entry.serviveTypemed}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>:اخري</span>
            <p>{entry.serviveTypemedOther}</p>
          </div>
        </div>
      </div>

      {/*//////////////////////             متطلبات واجراءات الحصول على الخدمة																						/////////////////////*/}
      <h2> متطلبات واجراءات الحصول على الخدمة </h2>
      <div className={classes.maininfo}>
        <div className={classes.right}>
          <div className={classes.single}>
            <span>:الشروط</span>
            <p>{entry.terms}</p>
          </div>
        </div>

        <div className={classes.left}>
          <div className={classes.single}>
            <span>:المستندات المطلوبة</span>
            <p>{entry.documentsRequired}</p>
          </div>

          <div className={classes.single}>
            <span>
              :الإجراءات الأساسية (ما هى الخطوات التى يجب إتخاذها قبل وأثناء
              وبعد الحصول على الخدمة؟)
            </span>
            <p>{entry.basicActions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryScreen;

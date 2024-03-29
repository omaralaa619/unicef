import asyncHandler from "express-async-handler";
import Entry from "../models/entriesModel.js";

const getEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find({});

  res.json(entries);
});

const getEntryById = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (entry) {
    res.json(entry);
  } else {
    res.status(404);
    throw new Error("Entry not found");
  }
});

const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (entry) {
    await entry.remove();
    res.json({
      message: "Entry Removed",
    });
  } else {
    res.status(404);
    throw new Error("Entry not found");
  }
});

const createEntry = asyncHandler(async (req, res) => {
  const entry = new Entry({
    //user: req.user._id,
    inChargeName: req.body.inChargeName,
    institutionName: req.body.institutionName,
    institutionType: req.body.institutionType,

    institutionAdress: req.body.institutionAdress,
    geographicAreaCovered: req.body.geographicAreaCovered,
    contactInfoPerson1Name: req.body.contactInfoPerson1Name,
    contactInfoPerson1Number: req.body.contactInfoPerson1Number,
    contactInfoPerson1LandNumber: req.body.contactInfoPerson1LandNumber,
    contactInfoPerson1Email: req.body.contactInfoPerson1Email,

    contactInfoPerson2Number: req.body.contactInfoPerson2Number,
    contactInfoPerson2LandNumber: req.body.contactInfoPerson2LandNumber,
    contactInfoPerson2Email: req.body.contactInfoPerson2Email,

    workedSince: req.body.workedSince,
    ///////

    // الفئات المتاح لها الخدمة

    ageRange1: req.body.ageRange1,
    ageRange2: req.body.ageRange2,
    ageRange3: req.body.ageRange3,

    sex: req.body.sex,
    nationality: req.body.nationality,
    disability: req.body.disability,
    disabilityType: req.body.disabilityType,

    doubleDisability: req.body.doubleDisability,
    emergencyCases: req.body.emergencyCases,
    /////

    //معلومات إضافية عن الخدمة
    serviceIsFree: req.body.serviceIsFree,
    servicePrice: req.body.servicePrice,
    serviceDays: req.body.serviceDays,
    serviceHours: req.body.serviceHours,
    emergencyHours: req.body.emergencyHours,

    //الخدمات الإجتماعية/الدعم النفسي الإجتماعي
    serviceProviderPsyc: req.body.serviceProviderPsyc,
    serviveTypePhsyc: req.body.serviveTypePhsyc,
    serviveTypePhsycOther: req.body.serviveTypePhsycOther,

    //الخدمات القانونية والأمنية
    serviceProviderSec: req.body.serviceProviderSec,
    serviveTypeSec: req.body.serviveTypeSec,
    serviveTypeSecOther: req.body.serviveTypeSecOther,

    // الخدمات الدعم الصحي

    serviceProvidermed: req.body.serviceProvidermed,
    serviveTypemed: req.body.serviveTypemed,
    serviveTypemedOther: req.body.serviveTypemedOther,

    //امتطلبات واجراءات الحصول على الخدمة

    terms: req.body.terms,
    documentsRequired: req.body.documentsRequired,
    basicActions: req.body.basicActions,
  });

  const createdEntry = await entry.save();
  res.status(201).json(createdEntry);
});

const updateEntry = asyncHandler(async (req, res) => {
  const {
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
  } = req.body;

  const entry = await Entry.findById(req.params.id);

  if (entry) {
    entry.inChargeName = inChargeName;
    entry.institutionName = institutionName;
    entry.institutionType = institutionType;
    entry.institutionAdress = institutionAdress;
    entry.geographicAreaCovered = geographicAreaCovered;
    entry.contactInfoPerson1Name = contactInfoPerson1Name;
    entry.contactInfoPerson1Number = contactInfoPerson1Number;
    entry.contactInfoPerson1LandNumber = contactInfoPerson1LandNumber;
    entry.contactInfoPerson1Email = contactInfoPerson1Email;
    entry.contactInfoPerson2Number = contactInfoPerson2Number;
    entry.contactInfoPerson2LandNumber = contactInfoPerson2LandNumber;
    entry.contactInfoPerson2Email = contactInfoPerson2Email;
    entry.workedSince = workedSince;
    entry.ageRange1 = ageRange1;
    entry.ageRange2 = ageRange2;
    entry.ageRange3 = ageRange3;
    entry.sex = sex;
    entry.nationality = nationality;
    entry.disability = disability;
    entry.disabilityType = disabilityType;
    entry.doubleDisability = doubleDisability;
    entry.emergencyCases = emergencyCases;
    entry.serviceIsFree = serviceIsFree;
    entry.servicePrice = servicePrice;
    entry.serviceDays = serviceDays;
    entry.serviceHours = serviceHours;
    entry.emergencyHours = emergencyHours;
    entry.serviceProviderPsyc = serviceProviderPsyc;
    entry.serviveTypePhsyc = serviveTypePhsyc;
    entry.serviveTypePhsycOther = serviveTypePhsycOther;
    entry.serviceProviderSec = serviceProviderSec;
    entry.serviveTypeSec = serviveTypeSec;
    entry.serviveTypeSecOther = serviveTypeSecOther;
    entry.serviceProvidermed = serviceProvidermed;
    entry.serviveTypemed = serviveTypemed;
    entry.serviveTypemedOther = serviveTypemedOther;
    entry.terms = terms;
    entry.documentsRequired = documentsRequired;
    entry.basicActions = basicActions;

    const updatedEntry = await entry.save();
    res.json(updatedEntry);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getEntryById, getEntries, deleteEntry, createEntry, updateEntry };

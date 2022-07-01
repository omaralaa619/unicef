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

export { getEntryById, getEntries, deleteEntry };

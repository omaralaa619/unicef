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
    title: req.body.title,
    description: req.body.description,
  });

  const createdEntry = await entry.save();
  res.status(201).json(createdEntry);
});

const updateEntry = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const entry = await Entry.findById(req.params.id);

  if (entry) {
    entry.title = title;
    entry.description = description;

    const updatedEntry = await entry.save();
    res.json(updatedEntry);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getEntryById, getEntries, deleteEntry, createEntry, updateEntry };

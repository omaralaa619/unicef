import Express from "express";
const router = Express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  getEntryById,
  getEntries,
  deleteEntry,
  createEntry,
  updateEntry,
} from "../controllers/entryController.js";

// fetch all entries
router.route("/").get(getEntries).post(createEntry);

router
  .route("/:id")
  .get(getEntryById)
  .delete(protect, deleteEntry)
  .put(updateEntry);

export default router;

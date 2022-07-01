import Express from "express";
const router = Express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  getEntryById,
  getEntries,
  deleteEntry,
} from "../controllers/entryController.js";

// fetch all entries
router.route("/").get(getEntries);

router.route("/:id").get(getEntryById).delete(protect, deleteEntry);

export default router;

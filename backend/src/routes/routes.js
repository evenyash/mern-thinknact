import express from "express";
import {
  createNote,
  getNoteById,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("Hello!");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "Note Created Successfully!" });
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Note Updated Successfully!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Note Deleted Successfully!" });
// });

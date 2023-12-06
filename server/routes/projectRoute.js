import express from "express";
import { getProject, project } from "../controller/projectController.js";

const router = express.Router();

router.post("/create", project);
router.get("/get", getProject);

export default router;

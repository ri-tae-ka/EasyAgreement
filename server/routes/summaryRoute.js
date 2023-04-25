const express = require("express");
const {
  createSummary,
  getSingleSummary,
  getAllSummary,
  updateSummary,
  deleteSummary,
} = require("../controllers/summaryController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/summary/new").post(isAuthenticatedUser, createSummary);
router.route("/summary/:id").get(getSingleSummary);
router.route("/summaries").get(getAllSummary);
router.route("/summary/:id").put(updateSummary);
router.route("/summary/:id").delete(deleteSummary);

module.exports = router;

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
router.route("/summary/:id").get(isAuthenticatedUser, getSingleSummary);
router.route("/summaries").get(isAuthenticatedUser, getAllSummary);
router.route("/summary/:id").put(isAuthenticatedUser, updateSummary);
router.route("/summary/:id").delete(isAuthenticatedUser, deleteSummary);

module.exports = router;

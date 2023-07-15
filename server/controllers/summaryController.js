const Summary = require("../models/summaryModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//create summary
exports.createSummary = catchAsyncError(async (req, res, next) => {
  // req.body.user = req.user.id;

  const summary = await Summary.create(req.body);

  res.status(201).json({
    success: true,
    summary,
  });
});

//get single summary
exports.getSingleSummary = catchAsyncError(async (req, res, next) => {
  const summary = await Summary.findById(req.params.id);

  if (!summary) {
    return next(new ErrorHandler("Summary not found!", 500));
  }

  res.status(200).json({
    success: true,
    summary,
  });
});

//get all summaries
exports.getAllSummary = catchAsyncError(async (req, res, next) => {
  const summaries = await Summary.find();

  res.status(200).json({
    success: true,
    summaries,
  });
});

//update summary
exports.updateSummary = catchAsyncError(async (req, res, next) => {
  let summary = await Summary.findById(req.params.id);

  if (!summary) {
    return next(new ErrorHandler("Summary not found!", 500));
  }

  summary = await Summary.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    summary,
  });
});

//delete summary
exports.deleteSummary = catchAsyncError(async (req, res, next) => {
  const summary = await Summary.findById(req.params.id);

  if (!summary) {
    return next(new ErrorHandler("Summary not found!", 500));
  }

  await summary.deleteOne();

  res.status(200).json({
    success: true,
    message: "Summary deleted successfully!",
  });
});

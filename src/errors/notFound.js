export const notFound = (req, res) => {
  return res.status(404).json({
    success: false,
    message: `The ${req.originalUrl} is not found`,
  });
};

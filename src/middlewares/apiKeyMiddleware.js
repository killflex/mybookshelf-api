const User = require("../models/User");

const checkApiKey = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ message: "API key is required" });
  }

  try {
    const user = await User.findOne({ apiKey });

    if (!user) {
      return res.status(401).json({ message: "Invalid API key" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error checking API key:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = checkApiKey;

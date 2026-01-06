const emailGenerator = require("../services/ai");
const emailGenerateHandler = async (req, res) => {
  try {
    const { purpose, recipient_name, tone } = req.body;
    if (!purpose || !recipient_name || !tone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const start = Date.now();
    const result = await emailGenerator(purpose, recipient_name, tone);
    const end = Date.now();
    const duration = end - start;
    console.log(`AI response time: ${duration} ms`);
    res.json({ email: result, ai_response_time: duration });
  } catch (err) {
    if (err.status === 503) {
      res.status(503).json({
        error: "AI service temporarily unavailable. Please try again later",
      });
    } else {
      res.status(500).json({ error: err.message });
    }
    console.log(err);
  }
};
module.exports = emailGenerateHandler;

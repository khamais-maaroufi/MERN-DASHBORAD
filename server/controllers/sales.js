import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const stats = await OverallStat.find();
    res.status(200).json(stats[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

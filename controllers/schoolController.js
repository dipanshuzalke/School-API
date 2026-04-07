const db = require("../db");
const { getDistance } = require("../utils/distance");

// Add School
const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (typeof latitude !== "number" || typeof longitude !== "number") {
      return res.status(400).json({
        message: "Latitude & Longitude must be numbers",
      });
    }

    const query =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING id";

    const result = await db.query(query, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res.status(201).json({
      message: "School added successfully",
      id: result.rows[0].id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// List Schools
const listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
      return res.status(400).json({
        message: "Invalid latitude or longitude",
      });
    }

    const result = await db.query("SELECT * FROM schools");

    const schoolsWithDistance = result.rows.map((school) => {
      const distance = getDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addSchool,
  listSchools,
};
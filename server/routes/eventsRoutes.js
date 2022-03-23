const express = require("express");
const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM events";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/new", (req, res) => {
    // const { user_id } = req.params;

    const { category, title, description, location, date, time } = req.body;

    let query = `
    INSERT INTO events (user_id, category, title, description, location, date, time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `;
    db.query(query, [
      6, // Switch with req.params above when login is established
      category,
      title,
      description,
      location,
      date,
      time,
    ])
      .then((result) => {
        // const events = result.rows;
        console.log(result.rows);
        // const templateVars = {
        //   events,
        // };
        // res.render("events", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};

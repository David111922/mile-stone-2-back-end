const tires = require("express").Router();
const { Op } = require("sequelize");
const db = require("../models");
const { Tire } = db;

// // serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "public", "build")));
// }

//************ROUTES**********

// //create newTire
tires.post("/", async (req, res) => {
  try {
    const newTire = await Tire.create({size})
    console.log(newTire.toJson())
  } catch (error) {
    console.error('Error inserting tire:', error);
  }
});
// tires.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const toDo = await Tire.query(
//       "SELECT * FROM todo WHERE todo_id = $1",
//       [id]
//     );
//     res.json(toDo.rows[0]);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// SHOW ALL Tires - GET
tires.get('/', async (req, res) => {
  try {
    const foundTires = await Tire.findAll({
      order: [['tire_id', 'ASC']]
    })
    console.log(foundTires)
    res.status(200).json(foundTires)
  } catch (error) {
    res.status(500).json({
      message: 'Tires not found', error: error
    })
  }
})

// DELETE A Tire
tires.delete('/:id', async (req, res) => {
  try {
    await Tire.destroy({
      where: { tire_id: req.params.id }
    })
    res.status(200).json({ message: 'Tire deleted' })
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE A Tire - PUT
tires.put('/:id', async (req, res) => {
  try {
    const updatedTire = await Tire.update(req.body, {
      where: { tire_id: req.params.id },
      returning: true
    })
    res.status(200).json(updatedTire)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = tires;

const tires = require('express').Router()
const { Op } = require('sequelize')
const db = require('../models')
const { Tire } = db


// SHOW ALL Tires - GET
tires.get('/', async (req, res) => {
  try {
    const foundTires = await Tire.findAll()
    res.status(200).json(foundTires)
  } catch (error) {
    res.status(500).json({
      message: 'Tires not found', error: error
    })
  }
})

// CREATE A NEW Tire - POST
tires.post('/', async (req, res) => {
  try {
    const createdTire = await Tire.createAll({
      brand: req.body.brand,
      model: req.body.model,
      size: req.body.size,
      price: req.body.price
    })
    res.status(200).json(createdTire)

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
}
)


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
}
)
module.exports = tires
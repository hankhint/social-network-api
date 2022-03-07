const router = require('express').Router();
//TODO: Change pizza to thought
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought

} = require('../../controllers/thought-controller');
//to do link up thought controller

// /api/pizzas
// pizza to thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
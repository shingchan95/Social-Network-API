const router = require('express').Router();
const {
    getthoughts,
    getSinglecourse,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction,
  
} = require('../../controllers/thoughtController');


router.route('/').get(getthoughts).post(createThought);
router.route('/:thoughtId').get(getSinglecourse).put(updateThought).delete(deleteThought)
router.route('/:thoughtId/reaction').post(createReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction)

module.exports = router;

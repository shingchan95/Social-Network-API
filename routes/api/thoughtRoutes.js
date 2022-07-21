const router = require('express').Router();
const {
    getthoughts,
    getSinglethought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction,
  
} = require('../../controllers/thoughtController');


router.route('/').get(getthoughts).post(createThought);
router.route('/:thoughtId').get(getSinglethought).put(updateThought).delete(deleteThought)
router.route('/reaction/:thoughtId').post(createReaction);
router.route('/reaction/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;

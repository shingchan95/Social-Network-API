const router = require('express').Router();
const {
    getallUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,

  
} = require('../../controllers/userController');

const {addfriends, deletefriends} = require('../../controllers/friendsController');

router.route('/').get(getallUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
router.route('/addfriend/:userID').post(addfriends).delete(deletefriends)



module.exports = router;

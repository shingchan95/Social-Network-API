const router = require('express').Router();
const {
    getallUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,

  
} = require('../../controllers/userController');


router.route('/').get(getallUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);



module.exports = router;

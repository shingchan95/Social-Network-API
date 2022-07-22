const { User, Thought } = require('../models');

module.exports = {
  getallUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts') 
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  //update a new user

  updateUser(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user with this id!' })
      : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res){
      User.findOneAndDelete({_id: req.params.userId})
      .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : Thought.findOneAndUpdate(
          { thought: req.params.thoughtId },
          { $pull: { students: req.params.thoughtId } },
          { new: true }
        )
    )
    .then((thought) =>
    !thought
      ? res.status(404).json({
          message: 'user deleted, but no thought found',
        })
      : res.json({ message: 'user successfully deleted' })
  )
      .catch((err) => res.status(500).json(err));
    },

};





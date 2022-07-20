const { Thought, User } = require('../models');

module.exports = {

  getthoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  getSinglecourse(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
      )
      .then((though) =>
      !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : User.findOneAndUpdate(
              { thoughts : req.params.thoughtId },
              {$pull :{thoughts : req.params.thoughtId}},
              { new: true }  
              )
        )
        .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'thought deleted but no user with this id!' })
          : res.json({ message: 'thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
    },
    
    createReaction(req, res)
};

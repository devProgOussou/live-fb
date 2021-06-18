const Post = require("../models/post");
const ObjetcID = require("mongoose").Types.ObjectId;

module.exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().select();
  res.status(200).json(posts);
};

module.exports.getPost = (req, res) => {
  if (!ObjetcID.isValid(req.params.id))
    return res.status(404).json({ message: "Unknown " + req.params.id });
  Post.findById(req.params.id, (err, data) => {
    if (!err) return res.send(data);
    else return res.status(404).send({ message: "Unknown " + req.params.id });
  });
};

module.exports.addPost = async (req, res) => {
  const { title, description, url } = req.body;

  try {
    const post = await Post.create({ title, description, url });
    res.status(201).json({ post: post._id });
  } catch (err) {
    res.status(200).send(err);
  }
};

module.exports.updatePost = async (req, res) => {
  if (!ObjetcID.isValid(req.params.id))
    return res.status(404).json({ message: "Unknown " + req.params.id });
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          url: req.body.url,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },

      (err, data) => {
        if (!err) return res.send(data);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.deletePost = async (req, res) => {
  if (!ObjetcID.isValid(req.params.id))
    return res.status(404).json({ message: "Unknown " + req.params.id });

  try {
    await Post.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted!" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

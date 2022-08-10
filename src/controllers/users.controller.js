import User from "../models/Users";
import jwt from "jsonwebtoken";
import config from "../config";

//POST
export const postUsers = async (req, res) => {
  if (
    (!req.body.name_user, !req.body.email, !req.body.password)
  ) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const { name_user, email, password } = req.body;
    const newUser = new User({
      name_user,
      email,
      password,
      type : req.body.type = 1,
    });
    const userSave = await newUser.save();
    const token = jwt.sign({ id: userSave._id }, config.SECRET, {
      expiresIn: 86400,
    }); // 24 hours
    return res.status(200).json({
      token,
      _id: userSave._id,
      name_user: userSave.name_user,
      email: userSave.email,
      type: userSave.type,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Users`,
    });
  }
};

//GET
export const getAllUsers = async (req, res) => {
  try {
    const usersGet = await User.find(
      
    );
    res.json(usersGet);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for get Users`,
    });
  }
};

//GET ONE
export const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne(id);
    if (!user)
      return res.status(400).json({
        message: `User with id ${id} does not exist`,
      });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving user with id: ${id}`,
    });
  }
};

//DELETE
export const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(400).send({
      message: `Error, This user with id: ${id}, does not exist, cannot be deleted`,
    });
  }
  res.json({
    message: `User were deleted succesfully`,
  });
};

//PUT
export const putUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, {
    $set: {
      name_user: req.body.name_user,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type,
    },
  });
  if (!user) {
    return res.status(400).send({
      message: `Error, This user with id: ${id}, does not exist`,
    });
  }
  res.json({
    message: `User was updated succesfully`,
  });
};

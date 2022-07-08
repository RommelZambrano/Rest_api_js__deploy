import User from "../models/Users";

//POST
export const postUsers = async (req, res) => {
  if ((!req.body.name, !req.body.email, !req.body.CI, !req.body.address)) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type,
    });
    const userSave = await newUser.save();
    res.json(userSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Users`,
    });
  }
};

//GET
export const getAllUsers = async (req, res) => {
  try {
    const usersGet = await User.find();
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
    const user = await User.findById(id);
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
      name: req.body.name,
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

import Client from "../models/Clients";

//POST
export const postClients = async (req, res) => {
  if ((!req.body.name, !req.body.email, !req.body.CI, !req.body.address)) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const newClient = new Client({
      name: req.body.name,
      email: req.body.email,
      CI: req.body.CI,
      address: req.body.address,
    });
    const clientSave = await newClient.save();
    res.json(clientSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Clients`,
    });
  }
};

//GET
export const getAllClients = async (req, res) => {
  try {
    const clientsGet = await Client.find();
    res.json(clientsGet);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for get Clients`,
    });
  }
};

//GET ONE
export const getOneClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client)
      return res.status(400).json({
        message: `Client with id ${id} does not exist`,
      });
    res.json(client);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving client with id: ${id}`,
    });
  }
};

//DELETE
export const deleteOneClient = async (req, res) => {
  const { id } = req.params;
  const client = await Client.findByIdAndDelete(id);
  if (!client) {
    return res.status(400).send({
      message: `Error, This client with id: ${id}, does not exist, cannot be deleted`,
    });
  }
  res.json({
    message: `Client were deleted succesfully`,
  });
};

//PUT
export const putClient = async (req, res) => {
  const { id } = req.params;
  const client = await Client.findByIdAndUpdate(id, {
    $set: {
      name: req.body.name,
      email: req.body.email,
      CI: req.body.CI,
      address: req.body.address,
    },
  });
  if (!client) {
    return res.status(400).send({
      message: `Error, This client with id: ${id}, does not exist`,
    });
  }
  res.json({
    message: `Client was updated succesfully`,
  });
};

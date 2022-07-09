import Provider from "../models/Provider";

//POST
export const postProviders = async (req, res) => {
  if ((!req.body.nameProvider, !req.body.city)) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const newProvider = new Provider({
      nameProvider: req.body.nameProvider,
      city: req.body.city,

    });
    const ProviderSave = await newProvider.save();
    res.json(ProviderSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Provider`,
    });
  }
};

//GET

export const getAllProviders = async (req, res) => {
  try {
    const providersGet = await Provider.find();
    res.json(providersGet);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for get Providers`,
    });
  }
};

//GET ONE

export const getOneProvider = async (req, res) => {
  const { id } = req.params;
  try {
    const provider = await Provider.findById(id);
    if (!provider)
      return res.status(400).json({
        message: `Provider with id ${id} does not exist`,
      });
    res.json(provider);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving provider with id: ${id}`,
    });
  }
};

//DELETE

export const deleteOneProvider = async (req, res) => {
  const { id } = req.params;
  const provider = await Provider.findByIdAndDelete(id);
  if (!provider) {
    return res.status(400).send({
      message: `Error, This provider with id: ${id}, does not exist, cannot be deleted`,
    });
  }
  res.json({
    message: `Provider were deleted succesfully`,
  });
};

//PUT

export const putProvider = async (req, res) => {
  const { id } = req.params;
  const provider = await Provider.findByIdAndUpdate(id, {
    $set: {
      nameProvider: req.body.nameProvider,
      city: req.body.city,
    },
  });
  if (!provider)
    return res.status(400).json({
      message: `Provider with id ${id} does not exist`,
    });
  else {
    return res.status(200).json({
      message: `Provider were update succefully `,
    });
  }
};

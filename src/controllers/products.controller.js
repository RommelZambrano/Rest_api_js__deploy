import Product from "../models/Products";

//POST
export const postProducts = async (req, res) => {
  if (
    (!req.body.name, !req.body.description, !req.body.provier , !req.body.price, !req.body.quantity)
  ) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      provider: req.body.provider,
      price: req.body.price,
      quantity: req.body.quantity,
      total: (req.body.total = req.body.price * req.body.quantity)
    });
    const productSave = await newProduct.save();
    res.json(productSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Products`,
    });
  }
};

//GET
export const getAllProducts = async (req, res) => {
  try {
    const productsGet = await Product.find();
    res.json(productsGet);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for get Products`,
    });
  }
};

//GET ONE
export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product)
      return res.status(400).json({
        message: `Product with id ${id} does not exist`,
      });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving product with id: ${id}`,
    });
  }
};

//DELETE
export const deleteOneProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(400).send({
      message: `Error, This product with id: ${id}, does not exist, cannot be deleted`,
    });
  }
  res.json({
    message: `Product were deleted succesfully`,
  });
};

//PUT
export const putProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, {
    $set: {
      name: req.body.name,
      description: req.body.description,
      provider: req.body.provider,
      price: req.body.price,
      quantity: req.body.quantity,
      total: (req.body.total = req.body.price * req.body.quantity)
    },
  }); 
  if (!product)
    return res.status(400).json({
      message: `Product with id ${id} does not exist`,
    })
  else {
    return res.status(200).json({
      message: `Product were update succefully `,
    })
  };
};

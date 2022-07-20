import Invoice from "../models/Invoices";

//POST
export const postInvoices = async (req, res) => {
  if (
    (!req.body.client_ID,
    !req.body.product_ID,
    !req.body.quantity,
    !req.body.price)
  ) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const newInvoice = new Invoice({
      client_ID: req.body.client_ID,
      product_ID: req.body.product_ID,
      quantity: req.body.quantity,
      price: req.body.price,
      subtotal: (req.body.subtotal = req.body.price * req.body.quantity),
      IVA: (req.body.IVA = 0.12 * req.body.subtotal),
      total: (req.body.total = +req.body.subtotal + +req.body.IVA),
    });
    const InvoiceSave = await newInvoice.save();
    res.json(InvoiceSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Invoices`,
    });
  }
};

//GET

export const getAllInvoices = async (req, res) => {
  try {
    const invoicesGet = await Invoice.find({})
      .populate("client_ID", {
        _id: 0,
        name_client: 1,
        email: 1,
        CI: 1,
        address: 1,
      })
      .populate("product_ID", {
        _id: 0,
        name_product: 1,
        description: 1,
      });
    res.json(invoicesGet);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for get Invoices`,
    });
  }
};

//GET ONE

export const getOneInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await Invoice.findById(id);
    if (!invoice)
      return res.status(400).json({
        message: `Invoice with id ${id} does not exist`,
      });
    res.json(invoice);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving invoice with id: ${id}`,
    });
  }
};

//DELETE

export const deleteOneInvoice = async (req, res) => {
  const { id } = req.params;
  const invoice = await Invoice.findByIdAndDelete(id);
  if (!invoice) {
    return res.status(400).send({
      message: `Error, This invoice with id: ${id}, does not exist, cannot be deleted`,
    });
  }
  res.json({
    message: `Invoice were deleted succesfully`,
  });
};

//PUT

export const putInvoice = async (req, res) => {
  const { id } = req.params;
  const invoice = await Invoice.findByIdAndUpdate(id, {
    $set: {
      client_ID: req.body.client_ID,
      product_ID: req.body.product_ID,
      quantity: req.body.quantity,
      price: req.body.price,
      subtotal: (req.body.subtotal = req.body.price * req.body.quantity),
      IVA: (req.body.IVA = 0.12 * req.body.subtotal),
      total: (req.body.total = +req.body.subtotal + +req.body.IVA),
    },
  });
  if (!invoice)
    return res.status(400).json({
      message: `Invoice with id ${id} does not exist`,
    });
  else {
    return res.status(200).json({
      message: `Invoice were update succefully `,
    });
  }
};

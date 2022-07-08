import Invoice from "../models/Invoices";

//POST
export const postInvoices = async (req, res) => {
    if (
      (!req.body.name, !req.body.products, !req.body.IVA, !req.body.total)
    ) {
      return res.status(400).send({
        message: `Content cannot be empty`,
      });
    }
    try {
        const newInvoice = new Invoice({
        name: req.body.name,
        product: req.body.products,
        IVA: (0.12 * req.body.total),
        total: req.body.total,
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
      const invoicesGet = await Invoice.find();
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
        name: req.body.name,
        product: req.body.products,
        IVA: (0.12 * req.body.total),
        total: req.body.total,
      },
    });
    if (!invoice)
      return res.status(400).json({
        message: `Invoice with id ${id} does not exist`,
      });
    res.json(invoice);
    res.json({
      message: `Invoice was updated succesfully`,
    });
  };
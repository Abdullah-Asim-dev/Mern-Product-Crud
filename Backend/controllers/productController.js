import productModel from "../model/productModel.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const {
      name,
      price,
      currencyCode,
      numberOfSales,
      rating,
      freeShipping,
      shopName,
    } = req.body;

    const image = req.file?.filename;

    if (
      !name ||
      !price ||
      !currencyCode ||
      !shopName ||
      !numberOfSales ||
      !rating ||
      !freeShipping ||
      !image
    ) {
      return res.status(400).send({
        message: "Please fill all the fields",
        success: false,
      });
    }

    const productData = await productModel.create({
      name,
      price,
      currencyCode,
      numberOfSales,
      rating,
      freeShipping,
      shopName,
      image,
    });

    res.status(201).send({
      message: "Product added successfully",
      success: true,
      result: productData,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    res.send({
      success: true,
      result: products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Product
export const getProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    res.send({
      success: true,
      result: product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(404).send({
        success: false,
        message: "Failed to update data",
      });
    }

    res.send({
      message: "Data Updated",
      success: true,
      result: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({
        success: false,
        message: "Failed to delete data",
      });
    }

    res.send({
      message: "Data Deleted",
      success: true,
      result: deletedProduct,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
import BrandModel from "../../models/brandModel.js";

export const getAllBrands = async (req, res) => {
  try {
    const brands = await BrandModel.findAll();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBrand = async (req, res) => {
  try {
    await BrandModel.create(req.body);
    res.json({ message: "brand created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBrand = async (req, res) => {
    try {
      const brandId = req.params.id;
      const brand = await BrandModel.findByPk(brandId);
      if (!brand) {
        res.status(404).json({ message: "brand does not exist" });
      } else {
        const { brandname } = req.body;
        console.log(brandname)
        const brandUpdate = {
          brandname: brandname || brand.brandname,
        };
        const updated = await BrandModel.update(brandUpdate, { where: { id: brandId } });
        res.status(200).json({ message: "brand updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const deleteBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const brand = await BrandModel.findByPk(brandId);
    if (!brand) {
      res.status(404).json({ message: "brand does not exits" });
    } else {
      await BrandModel.destroy({ where: { id: brandId } });
      res.status(200).json({ message: "brand deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

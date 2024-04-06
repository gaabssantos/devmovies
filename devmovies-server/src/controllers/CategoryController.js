import Category from '../models/CategoryModel.js';

export const getCategories = async (_, res) => {
  const categories = await Category.find();

  return res.status(200).json(categories);
};

export const createCategory = async (req, res) => {
  const category = req.body;
  const newCategory = await Category.create(category);

  return res.status(201).json(newCategory);
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  await Category.findOneAndDelete({ _id: id });

  return res.status(200).json({ message: 'Category deleted.' });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = req.body;

  const categoryUpdated = await Category.findOneAndUpdate({ _id: id }, category, {
    new: true,
  });

  return res.status(200).json(categoryUpdated);
};

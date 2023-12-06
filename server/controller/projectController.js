import Project from "../model/projectModel.js";

export const project = async (req, res, next) => {
  try {
    const { name, image } = req.body;

    await Project.create({ name, image });

    res.status(200).json("success");
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

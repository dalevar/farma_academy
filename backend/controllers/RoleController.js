import Roles from "../models/Roles.js";
export const getAllRole = async (req, res) => {
  await Roles.findAll()
    .then((data) => {
      return res
        .status(200)
        .json({ role: data, repsonse: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const getRoleById = async (req, res) => {
  await Roles.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data === null || data === undefined) {
        return res
          .status(404)
          .json({ repsonse: 404, message: "data not found" });
      }
      return res
        .status(200)
        .json({ role: data, repsonse: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const createRole = async (req, res) => {
  await Roles.create({
    nama: req.body.name,
  })
    .then((data) => {
      return res.status(201).json({
        repsonse: 201,
        result: data,
        message: "Data created successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const updateRole = async (req, res) => {
  await Roles.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(async (data) => {
      if (data === null || data === undefined || data === 0) {
        return res
          .status(404)
          .json({ role: data, repsonse: 404, message: "data not found" });
      }
      await Roles.update(
        {
          nama: req.body.name,
        },
        {
          where: {
            id: data.id,
          },
        }
      )
        .then((dataRole) => {
            console.log(dataRole);
          return res.status(200).json({
            repsonse: 200,
            result: dataRole,
            message: "Data updated successfully",
          });
        })
        .catch((err) => {
          return res.status(500).json({ message: err.message });
        });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const deleteRole = async (req, res) => {
  await Roles.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      return res.status(200).json({
        repsonse: 200,
        message: "Data deleted successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

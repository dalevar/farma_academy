import Roles from "../models/Roles.js";
import Users from "../models/Users.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.email)
    return res.status(403).json({ msg: "Mohon login ke akun anda!" });
  const user = await Users.findOne({
    where: {
      email: req.session.email,
    },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (!user) return res.status(404).json({ msg: "Akun tidak ditemukan!" });

  req.nomor = user.uuid;
  req.email = user.email;
  req.userId = user.id;
  req.role = user.role.nama;

  next();
};

export const verifyKonsultan = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      email: req.session.email,
    },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (!user) return res.status(404).json({ msg: "Akun tidak ditemukan!" });
  if (
    user.role.nama !== "konsultan" ||
    user.role.nama !== "super_admin" ||
    user.role.nama !== "admin"
  )
    return res.status(403).json({ msg: "Akses terlarang!" });
  req.nomor = user.uuid;
  req.email = user.email;
  req.userId = user.id;
  req.role = user.role.nama;
  next();
};
export const verifyAdmin = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      email: req.session.email,
    },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (!user) return res.status(404).json({ msg: "Akun tidak ditemukan!" });
  if (user.role.nama !== "admin" || user.role.nama !== "super_admin")
    return res.status(403).json({ msg: "Akses terlarang!" });
  next();
};

export const verifySuperAdmin = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      email: req.session.email,
    },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (!user) return res.status(404).json({ msg: "Akun tidak ditemukan!" });
  if (user.role.nama !== "super_admin")
    return res.status(403).json({ msg: "Akses terlarang!" });
  req.nomor = user.uuid;
  req.email = user.email;
  req.userId = user.id;
  req.role = user.role.nama;
  next();
};

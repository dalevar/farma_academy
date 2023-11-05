import Roles from "../models/Roles.js";
import Users from "../models/Users.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await Users.findOne({
    where: { email: req.body.email },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (!user) return res.status(404).json({ msg: "Akun belum terdaftar!" });
  if (user.is_active === false)
    return res
      .status(403)
      .json({ msg: "Akun kamu belum diaktivasi, silahkan hubungi operator" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Password salah!" });

  req.session.nomor = user.uuid;
  req.session.email = user.email;
  req.session.userId = user.id;
  req.session.role = user.role.nama;
  res.status(200).json({
    nomor: user.uuid,
    name: user.nama,
    email: user.email,
    role: user.role.nama,
    statusPremiumId: user.statusPremiumId,
  });
};
export const SessionInformation = async (req, res) => {
  if (!req.session.email)
    return res.status(400).json({ msg: "Silahkan login ke akun anda!" });

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
  if (!user) return res.status(404).json({ msg: "Akun kamu belum terdaftar!" });

  res.status(200).json({
    nomor: user.uuid,
    name: user.nama,
    email: user.email,
    role: user.role.nama,
    statusPremiumId: user.statusPremiumId,
  });
};
export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat Logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};

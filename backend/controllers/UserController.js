/* eslint-disable no-unused-vars */
import Users from "../models/Users.js";
import Roles from "../models/Roles.js";
import argon2 from "argon2";
import path from "path";
import fs from "fs";
import moment from "moment";
export const getAllUser = async (req, res) => {
  await Users.findAll({
    include: [
      {
        model: Roles,
        attributes: ["nama"],
      }
    ]
  }).then((data) => {
    return res.status(200).json({ userData: data, repsonse: 200, message: "success" });
  }).catch((err) => {
    return res.status(500).json({ message: err.message });
  })
};
export const getUserById = async (req, res) => {
    await Users.findOne({
        where: {
            uuid: req.params.nis
        },
        include: [{
            model: Roles,
            attributes: ["nama"],
        }]
    }).then((data) => {
        if(data === null || data === undefined){
            return res.status(404).json({userData: data, repsonse: 404, message: "data not found" });
        }
        return res.status(200).json({ userData: data, repsonse: 200, message: "success" });
    }).catch((err) => {
        return res.status(500).json({ message: err.message });
    })
};
export const createUser = async (req, res) => {
    // const {sertifikatKonsultan, photoProfile} = req.files;
    // return res.status(201).json({data: req.body, dataFiles: {sertiKonsul: sertifikatKonsultan.name, photoProfile: photoProfile.name}, message: "Data created succesfully"})
    const emailUser = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
    const noHpUser = await Users.findOne({
        where: {
            no_hp: req.body.noHp
        }
    });
    const username = await Users.findOne({
        where: {
            username: req.body.username
        }
    })
    const roleUser = await Roles.findOne({
        where: {
            id: req.body.roleId
        }
    })
    if(username) return res.status(400).json({response: 400, message: "Username sudah digunakan"});
    if(emailUser) return res.status(400).json({response: 400, message: "Email telah sudah terdaftar"});
    if(noHpUser) return res.status(400).json({response: 400, message: "Nomor handphone sudah terdaftar"});
    if(req.body.password !== req.body.confirmPassword) return res.status(400).json({response: 400, message: "Password dan confirm password tidak sama!"});
    if(req.files === null || !req.files) return res.status(400).json({response: 400, message: "File tidak ditemukan"});

    const hashPassword = await argon2.hash(req.body.password);
    const photoProfile = req.files.photoProfile
    const sertifikatKonsultan = req.files.sertifikatKonsultan

    const file = photoProfile;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const photoProfileFile = req.body.username.replace(/ /g, "_") + "-" + file.md5 + ext;
    const urlProfile = `${req.protocol}://${req.get(
        "host"
    )}/images/photo_profile/${photoProfileFile}`;

    let sertifikatKonsultanFile = null;
    let urlSertifikatKonsultan = null;

    const allowedType = [".jpeg",".jpg",".png"];
    if(!allowedType.includes(ext.toLowerCase())) return res.status(400).json({response: 400, message: "Tipe file tidak sesuai"});
    if(fileSize > 10000000) return res.status(400).json({response: 400, message: "Ukuran file terlalu besar"});

    if(roleUser.dataValues.nama === "konsultan"){
        if(sertifikatKonsultan === null || !sertifikatKonsultan) return res.status(400).json({response: 400, message: "File sertifikat konsultan tidak ditemukan"});
        const fileSizeKonsul = file.data.length;
        const extKonsul = path.extname(sertifikatKonsultan.name);
        if(!allowedType.includes(extKonsul.toLowerCase())) return res.status(400).json({response: 400, message: "Tipe file sertifikat konsultan tidak sesuai"});
        if(fileSizeKonsul > 100000000) return res.status(400).json({response: 400, message: "Ukuran file sertifikat konsultan terlalu besar"});
        sertifikatKonsultanFile = req.body.username.replace(/ /g, "_") + "-" + file.md5 + extKonsul;
        urlSertifikatKonsultan = `${req.protocol}://${req.get(
            "host"
        )}/images/serti_konsultan/${sertifikatKonsultanFile}`;
        
    }
   
    photoProfile.mv(`./public/images/photo_profile/${photoProfileFile}`, async (err) => {
        if (err) return res.status(500).json({response: 500, message: err.message});
        await Users.create({
            nama: req.body.name,
            email: req.body.email,
            no_hp: Number(req.body.noHp),
            username: req.body.username,
            tempat_lahir: req.body.tempatLahir,
            tanggal_lahir: moment(req.body.tglLahir),
            jenis_kelamin: req.body.jenisKelamin,
            domisili_sekarang: req.body.domisiliSekarang,
            pendidikan_terakhir: req.body.pendidikanTerakhir,
            pekerjaan: req.body.pekerjaan === null || !req.body.pekerjaan ? "pelajar" : req.body.pekerjaan,
            perusahaan_bekerja: req.body.perusahaanBekerja,
            url_serti_konsultan: urlSertifikatKonsultan,
            serti_konsultan: sertifikatKonsultanFile,
            url_photo_profile: urlProfile,
            photo_profile: photoProfileFile,
            password: hashPassword,
            roleId: Number(req.body.roleId),
            is_active: true
        }).then((data) => {
            if(sertifikatKonsultanFile !== null || sertifikatKonsultanFile){
                sertifikatKonsultan.mv(`./public/images/serti_konsultan/${sertifikatKonsultanFile}`, async (err) => {
                    if (err) return res.status(500).json({response: 500, message: err.message});
                })
            }
            return res.status(201).json({userData: data, repsonse: 201, message: "Data created successfully"});
        }).catch((err) => {
            return res.status(500).json({response: 500, message: err.message});
        })
    });
  
};
export const updateUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.nis
        },
        include: [{
            model: Roles
        }]
    })
    const emailUser = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
    const noHpUser = await Users.findOne({
        where: {
            no_hp: req.body.noHp
        }
    });
    const username = await Users.findOne({
        where: {
            username: req.body.username
        }
    })
    if(username && user.dataValues.uuid !== req.params.nis) return res.status(400).json({response: 400, message: "Username sudah digunakan"});
    if(emailUser && user.dataValues.uuid !== req.params.nis) return res.status(400).json({response: 400, message: "Email telah sudah terdaftar"});
    if(noHpUser && user.dataValues.uuid !== req.params.nis) return res.status(400).json({response: 400, message: "Nomor handphone sudah terdaftar"});

    let hashPassword;
    if(req.body.password === null || !req.body.password){
        hashPassword = req.body.password
    }else{
        if(req.body.password !== req.body.confirmPassword) return res.status(400).json({response: 400, message: "Password dan confirm password tidak sama!"});
        hashPassword = await argon2.hash(req.body.password, 10);
    }
    // Global variable
    const photoProfile = req.files.photoProfile
    const sertifikatKonsultan = req.files.sertifikatKonsultan
    let sertifikatKonsultanFile = null;
    let urlSertifikatKonsultan = null;
    const allowedType = [".jpeg",".jpg",".png"];
     // Konsultan file
     if(user.role.nama === "konsultan" && user.serti_konsultan){
        if(sertifikatKonsultan === null || !sertifikatKonsultan) return res.status(400).json({response: 400, message: "File sertifikat konsultan tidak boleh kosong"});
        const fileSizeKonsul = req.files.sertifikatKonsultan.data.length;
        const extKonsul = path.extname(req.files.sertifikatKonsultan.name);
        if(!allowedType.includes(extKonsul.toLowerCase())) return res.status(400).json({response: 400, message: "Tipe file sertifikat konsultan tidak sesuai"});
        if(fileSizeKonsul > 100000000) return res.status(400).json({response: 400, message: "Ukuran file sertifikat konsultan terlalu besar"});
        sertifikatKonsultanFile = req.body.username.replace(/ /g, "_") + "-" + req.files.sertifikatKonsultan.md5 + extKonsul;
        urlSertifikatKonsultan = `${req.protocol}://${req.get(
            "host"
        )}/images/serti_konsultan/${sertifikatKonsultanFile}`;
       
        fs.unlinkSync(`./public/images/serti_konsultan/${user.serti_konsultan}`);
        sertifikatKonsultan.mv(`./public/images/serti_konsultan/${sertifikatKonsultanFile}`, async (err) => {
            if(err) return res.status(500).json({response: 500, message: err.message});
        })
    }
    if(photoProfile === null || !photoProfile) return res.status(400).json({response: 400, message: "File tidak ditemukan"});
    const fileSize = photoProfile.data.length;
    const ext = path.extname(photoProfile.name);
    const photoProfileFile = req.body.username.replace(/ /g, "_") + "-" + photoProfile.md5 + ext;
    const urlProfile = `${req.protocol}://${req.get(
        "host"
    )}/images/photo_profile/${photoProfileFile}`;
    if(!allowedType.includes(ext.toLowerCase())) return res.status(400).json({response: 400, message: "Tipe file tidak sesuai"});
    if(fileSize > 10000000) return res.status(400).json({response: 400, message: "Ukuran file terlalu besar"});
    
    fs.unlinkSync(`./public/images/photo_profile/${user.photo_profile}`);
    photoProfile.mv(`./public/images/photo_profile/${photoProfileFile}`, async (err) => {
        if(err) return res.status(500).json({response: 500, message: err.message});
        await Users.update({
            nama: req.body.name,
            email: req.body.email,
            no_hp: Number(req.body.noHp),
            username: req.body.username,
            tempat_lahir: req.body.tempatLahir,
            tanggal_lahir: moment(req.body.tglLahir),
            jenis_kelamin: req.body.jenisKelamin,
            domisili_sekarang: req.body.domisiliSekarang,
            pendidikan_terakhir: req.body.pendidikanTerakhir,
            pekerjaan: req.body.pekerjaan === null || !req.body.pekerjaan ? "pelajar" : req.body.pekerjaan,
            perusahaan_bekerja: req.body.perusahaanBekerja,
            url_serti_konsultan: urlSertifikatKonsultan,
            serti_konsultan: sertifikatKonsultanFile,
            url_photo_profile: urlProfile,
            photo_profile: photoProfileFile,
            password: hashPassword
        },{
            where: {
                uuid: user.uuid
            }
        }).then(() => {
           
            return res.status(200).json({response: 200, message: "success"});
        }).catch((err) => {
            return res.status(500).json({response: 500, message: err.message});
        })
    })
   
};
export const deleteUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.nis
        },
        include: [{
            model: Roles
        }]
    })
    if(!user) return res.status(404).json({response: 404, message: "Data tidak ditemukan"});

    if(user.role.nama === "konsultan"){
        fs.unlinkSync(`./public/images/serti_konsultan/${user.serti_konsultan}`);
    }
    fs.unlinkSync(`./public/images/photo_profile/${user.photo_profile}`);
    await Users.destroy({
        where: {
            uuid: user.uuid
        }
    }).then(() => {
        return res.status(200).json({response: 200, message: "Data deleted successfully"});
    }).catch((err) => {
        return res.status(500).json({response: 500, message: err.message});
    })
};
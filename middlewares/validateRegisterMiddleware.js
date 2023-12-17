const path = require("path");
const { body } = require("express-validator");

validation = [
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un email válido"),
  body("fullName").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  // body("image").custom((value, { req }) => {
  //   let file = req.file;
  //   let acceptedExtensions = [".jpg", ".png", ".git"];

  //   if (!file) {
  //     throw new Error("Tienes que subir una imagen");
  //   } else {
  //     let fileExtension = path.extname(file.orignalname);
  //     if (!acceptedExtensions.includes(fileExtension)) {
  //       console.log("IMAGEN");
  //       throw new Error(
  //         "Las extensiones de archivo permitidas son " +
  //           acceptedExtensions.join(", ")
  //       );
  //     }
  //   }

  //   return true;
  // }),
];

module.exports = validation;

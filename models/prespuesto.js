const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "presupuesto",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      concepto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
          isAlpha: { args: true, msg: "solo se admiten letras" },
        },
      },
      monto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
          notNull: { msg: "no admite valores nulos" },
          isDecimal: {
            args: true,
            msg: "monto invalido",
          },
          min: { args: 1, msg: "solo admite valores mayores o iguales a 1" },
        },
      },

      fecha: { type: DataTypes.DATEONLY, allowNull: false, 
      validate: {
        notEmpty: { args: true, msg: "debes completar este campo" },
      }
    },

      tipo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "debes completar este campo" },
          isIn: {
            args: [["ingreso", "egreso"]],
            msg: "solo se admite ingreso o egreso",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

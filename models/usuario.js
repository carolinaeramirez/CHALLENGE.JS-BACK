const {DataTypes}= require ('sequelize');


module.exports= (sequilize, type) => {
    return sequilize.define (ususario, {
        id: {
            type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: { args: true, msg: "debes completar este campo" },
              isAlpha: { args: true, msg: "solo se admiten letras" },
            },
        } 
    }
        )
}
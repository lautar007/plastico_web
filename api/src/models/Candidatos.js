const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('candidatos', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    newsletter:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    pasantia: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    contacto:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    mensaje:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},
{
    timestamps: false
})

}
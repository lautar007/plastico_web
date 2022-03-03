const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('portada', {
        imagenA:{
            type: DataTypes.STRING,
            defaultValue: "https://i.pinimg.com/564x/a7/34/46/a73446345a4c441921f6d44eb270bcfd.jpg"
        },
        imagenB:{
            type: DataTypes.STRING,
            defaultValue: "https://i.pinimg.com/564x/de/b5/90/deb590f49a8249aedd5cf8b4411250be.jpg"     
        }   
    },
    {
        timestamps: false
    })
}
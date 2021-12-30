const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('publicaciones', {
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

}
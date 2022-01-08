const { DataTypes, ENUM } = require('sequelize');
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
    },
    categoria: {
        type: DataTypes.ENUM('comercial', 'artistico', 'noticia'),
        allowNull: false
    }
},
{
    timestamps: false
})

}
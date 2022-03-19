const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tareas', {
    fecha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    hora:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tarea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'terminado'),
        allowNull: false
    }
},
{
    timestamps: false
})
}
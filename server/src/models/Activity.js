const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Activity', {
    // id: {
    //     type: DataTypes.STRING,
    //     primaryKey: true
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficult: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1,
            max: 5
        }
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM('summer','winter','autumn','spring'),
    }
    },
    {
        timestamps: false,
        freezeTableName: true
    });
};
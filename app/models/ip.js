module.exports = function(sequelize, DataTypes) {
    var IP = sequelize.define("IP", {
        sourceIP: DataTypes.STRING,
        destinationPort: DataTypes.STRING,
        actionstat: DataTypes.STRING,
        longitude: DataTypes.STRING,
        latitude: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        state: DataTypes.STRING,
        createdAt: {
            type: 'TIMESTAMP'
        }
    });
    return IP;
};
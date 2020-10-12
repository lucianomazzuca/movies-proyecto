module.exports = (sequelize, dataTypes) => {

    let alias = "Movies";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        }
    };

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    const Movies = sequelize.define(alias, cols, config);

    return Movies;
}
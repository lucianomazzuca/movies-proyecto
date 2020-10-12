module.exports = (sequelize, dataTypes) => {

    let alias = "Actors";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER(10).UNSIGNED
        },
        country: {
            type: dataTypes.STRING(255)
        }
    };

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    const Actors = sequelize.define(alias, cols, config);

    return Actors;
}
module.exports = (sequelize, dataTypes) => {

    let alias = "Movies";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED
        }
    };

    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
    }


    const Movies = sequelize.define(alias, cols, config);

    return Movies;
}
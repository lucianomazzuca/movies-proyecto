module.exports = (sequelize, dataTypes) => {

    let alias = "Genres";

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
        tableName: "genres",
        timestamps: true,
        underscored: true
    }

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models) {
        Genre.hasMany(models.Movies, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre;
}
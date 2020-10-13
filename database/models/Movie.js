module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null,
        },
    };

    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true,
    };

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genres, {
            as: 'genres',
            foreignKey: 'genre_id'
        })

        Movie.belongsToMany(models.Actors, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }
    
    return Movie;
};

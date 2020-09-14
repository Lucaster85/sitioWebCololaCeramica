module.exports = (sequelize, dataTypes) => {

    const alias = 'Favorite';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        total: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        user_favorite_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }

    const config = {
        tableName: 'carts',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    } 

    const Favorite = sequelize.define(alias, cols, config);

    favorite.associate = models => {
        favorite.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_favorite_id'
        });
        favorite.belongsToMany(models.Product, {
            as: 'products',
            through: 'favorite_products',
            foreignKey: 'product_fav_id',
            otherKey: 'favorite_id'
        })
    };

    return Favorite;
}
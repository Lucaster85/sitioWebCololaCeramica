module.exports = (sequelize, dataTypes) => {

    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        summary: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT
        },
        outstanding: {
            type: dataTypes.BOOLEAN,
            defaultValue: 0
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            reference: {
                model: 'Category',
                key: 'id'
            }
        }
    }

    const config = {
        tableName: 'products',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsToMany(models.Cart, {
            as: 'carts',
            through: 'cart_products',
            foreignKey: 'cart_id',
            otherKey: 'product_id'
        });
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
        Product.hasMany(models.Image, {
            as: 'images'
        })
    };

    return Product;
}
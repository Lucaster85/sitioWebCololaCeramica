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
        image1: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image2: {
            type: dataTypes.STRING,
            defaultValue: null
        },
        image3: {
            type: dataTypes.STRING,
            defaultValue: null
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
            allowNull: false
        },
        delete: {
            type: dataTypes.BOOLEAN,
            defaultValue: 0
        }
    }

    const config = {
        tableName: 'products',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate(models => {
        Product.belongsToMany(models.Cart, {
            as: 'carts',
            through: 'cart_products',
            foreignKey: 'cart_id',
            otherKey: 'product_id'
        })
    })

    return Product;
}
module.exports = (sequelize, dataTypes) => {

    const alias = 'Cart';

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
        user_cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        delete: {
            type: dataTypes.BOOLEAN,
            defaultValue: 0
        }
    }

    const config = {
        tableName: 'carts',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_cart_id'
        });
        Cart.belongsToMany(models.Product, {
            as: 'products',
            through: 'cart_products',
            foreignKey: 'product_id',
            otherKey: 'cart_id'
        })
    };

    return Cart;
}
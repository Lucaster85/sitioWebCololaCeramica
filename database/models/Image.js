module.exports = (sequelize, dataTypes) => {

    const alias = 'Image';

    const cols = {
        id: {
            type: dataTypes.INTENGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        product_id: {
            type: dataTypes.INTENGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        route: {
            type: dataTypes.STRING,
            allowNull: false
        }

    }

    const config = {
        tableName: 'images',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = models => {
        Image.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return Image;
}
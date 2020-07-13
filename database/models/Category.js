module.exports = (sequelize, dataTypes) => {

    const alias = 'Category';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        vajilla: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        decoracion: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        delete: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    };

    const config = {
        tableName: 'categories',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
        })
    };

    return Category;
}
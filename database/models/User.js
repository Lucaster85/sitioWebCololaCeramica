module.exports = (sequelize, dataTypes) => {
    
    const alias = 'User';

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
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING,
            defaultValue: null
        },
        delete: {
            type: dataTypes.BOOLEAN,
            defaultValue: 0
        }
    }

    const config = {
        tableName: 'users',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updetadAt: 'updated_at'
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Address, {
            as: 'addresses',
        })
    }
    User.associate = models => {
        User.hasMany(models.Cart, {
            as: 'carts',
        })
    }

    return User;
}
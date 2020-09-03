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
        }
    }

    const config = {
        tableName: 'users',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updetadAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Address, {
            as: 'addresses',
        });
        User.hasMany(models.Cart, {
            as: 'carts',
        });
        User.belongsToMany(models.Role, {
            as: 'roles',
            through: 'user_roles',
            foreignKey: 'role_id',
            otherKey: 'user_id'
        });
    }

    return User;
}
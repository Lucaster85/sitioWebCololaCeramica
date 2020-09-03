module.exports = (sequelize, dataTypes) => {

    const alias = 'Role';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        role: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    const config = {
        tableName: 'roles',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    const Role = sequelize.define(alias, cols, config);

    Role.associate = models => {
        Role.belongsToMany(models.User, {
            as: 'users',
            through: 'user_roles',
            foreingKey: 'user_id',
            otherKey: 'role_id'
        })
    }

    return Role;
}
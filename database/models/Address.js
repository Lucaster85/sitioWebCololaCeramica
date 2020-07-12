module.exports = (sequelize, dataTypes) => {

    const alias = 'Address';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        city: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        postcode: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        street: {
            type: dataTypes.STRING(100),
            allowNull:false
        },
        number: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        flour: {
            type: dataTypes.STRING(45),
            defaultValue: null
        },
        apartment: {
            type: dataTypes.STRING(45),
            defaultValue: null
        },
        user_address_id: {
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
        tableName: 'addresses',
        underscored: true,
        timestamps: true,
        createdAt: 'creadted_at',
        updatedAt: 'updated_at'
    }

    const Address = sequelize.define(alias, cols, config)

    Address.associate = models => {
        Address.belongsTo(models.User, {
            as: 'address',
            foreignKey: 'user_address_id'
        })
    }

    return Address;
}
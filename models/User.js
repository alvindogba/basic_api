export default (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    
    
    }, {
      tableName: 'customer',
      timestamps: true,
      underscored: true,
    });
  
   
  
    return Customer;
  };
  

queryInterface.createTable(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

  username: {
    type: Sequelize.STRING(50),
  },

  password: {
    type: Sequelize.STRING(50),
  }
  },
  {
    engine: 'MYSQL',                     // default: 'InnoDB'
    charset: 'latin1',                    // default: null

  }
)
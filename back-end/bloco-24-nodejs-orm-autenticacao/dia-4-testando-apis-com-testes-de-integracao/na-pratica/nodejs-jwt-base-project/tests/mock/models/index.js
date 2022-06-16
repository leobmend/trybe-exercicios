const users = require('./users.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }

  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const mockFindOne = (Instance, where) => {
  if (!where) {
    return Instance[0];
  }

  const whereFields = Object.keys(where);

  const result = Instance.filter(item => {
    const onlyMatch = whereFields.map( key => item[key] === where[key]);
    return onlyMatch.filter(v=>v).length === whereFields.length;
  });

  return result[0];
}

const User = {
  create: async (data) => mockCreate(users, data),
  findAll: async () => users,
  findByPk: async (id) => users.find((user) => user.id === id),
  findOne: async ({ where }) => mockFindOne(users, where),
};

module.exports = {
  User,
};
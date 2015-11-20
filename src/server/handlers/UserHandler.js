var Immutable = require('immutable');

let user = Immutable.Map({
  firstName: 'Barry',
  lastName: 'Dillon',
  location: 'Moscow'
});

const getUser = (req, res) => {
  res.send(user)
}

const updateUser = (req, res) => {
  user = user.merge(req.body);
  res.send(user);
}

module.exports = { getUser, updateUser };

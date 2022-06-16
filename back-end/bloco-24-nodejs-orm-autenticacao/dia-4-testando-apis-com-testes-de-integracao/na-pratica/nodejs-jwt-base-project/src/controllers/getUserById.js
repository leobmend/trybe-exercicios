const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { user: tokenUser } = req;
    const { id } = req.params;

    if (parseInt(id, 10) !== tokenUser.id) {
      res.status(401).json({ message: 'Acesso negado' });
    }

    const user = await User.findByPk(parseInt(id, 10));

    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

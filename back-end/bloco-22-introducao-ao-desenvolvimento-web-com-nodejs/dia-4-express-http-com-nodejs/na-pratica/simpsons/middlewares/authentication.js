const authorization = (req, res, next) => {
  try {
    const token = req.headers.authorization || '';

    if (token.length != 16) return res.status(401).json({ message: 'Token inválido!' });

    return next();
  } catch (err) {
    return res.status(500).end();
  }
}

export default authorization;

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(400).json({
      success: false,
      message: 'users.authentication.required'
    })
  }

  try {
    req.user = jwt.verify(authorization, process.env.SECRET_KEY)
    next()
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'users.authentication.error'
    })
  }
}

const jwt = require('jsonwebtoken')
// const { SECRET_KEY } = process.env
// const { roles } = require('../middlewares/roles')

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

  // if (authorization != undefined) {
  //   const bearer = authorization.split(' ')
  //   var token = bearer[1]
  //   console.log(token)

  //   jwt.verify(token, SECRET_KEY, (err, data) => {
  //     if (err) {
  //       res.status(401)
  //       res.json({ error: 'Token ' })
  //     } else {
  //       console.log({
  //         id: data.id,
  //         email: data.email,
  //         role: data.role
  //       })
  //       req.token = token
  //       req.roles
  //       req.loggeduser = { id: data.id, email: data.email, role: data.role }
  //       console.log(data + ' data')
  //       next()
  //     }
  //   })
  // } else {
  //   res.status(401)
  //   res.json({ error: 'Token inválido' })
  // }
}

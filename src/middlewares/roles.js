const roles = {
  ROOT: 'ROOT',
  USER: 'USER'
}

const permissions = (permissions) => {
  return (req, res, next) => {
    console.log(req.user)

    if (!permissions.includes(req.user.role)) {
      return res.status(401).json({
        success: false,
        mesesage: 'user.permissions.denied'
      })
    }
    next()
  }
}

module.exports = { roles, permissions }

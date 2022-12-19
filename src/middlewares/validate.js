// const knex = require('../database')

// module.exports = (email) => {
//   const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
//   if (!reg.test(email)) {
//     // nao é um email valido, nao vale a pena perguntar se existe na DB

//     console.error('RegEx: Email nao é valido')
//   }

//   knex.connect((err, db) => {
//     db.collection('users').findOne({ email: value }, (err, res) => {
//       if (res && res.email === value) {
//         // email existe na base de dados
//         console.error('DB: Email existente')
//       } else {
//         console.error('ok')
//       }
//     })
//   })
// }

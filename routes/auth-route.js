const router = require('express').Router()
const passport = require('passport')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get(
  '/google',
  passport.authenticate('google', {
    // 使用 passport 對 google 帳密來進行驗證
    scope: ['profile'] // 要獲得使用者所有資料 for 驗證，當然也可以只寫入單一資訊。如 email
  })
)

module.exports = router

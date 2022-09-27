module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/login");
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/dashboard");
      }
    },
    ensureAdmin: function (req, res, next) {
      if (req.user.role === 'admin') {
        return next();
      } else {
        res.redirect("/login")
      }
    }
  };
  
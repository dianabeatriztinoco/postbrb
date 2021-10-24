const { User } = require("./db/models");

const loginUser = (req, res, user) => {
    req.session.auth = { userId: user.id };
};

const logoutUser = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if(!res.locals.authenticated) {
        res.redirect("/users/login"); // Redirect user to the login page if not logged in.
        return;
    }

    return next();
};

const restoreUser = async (req, res, next) => {
    if(req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const user = await User.findByPk(userId);

            if(user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch(err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
}

module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth
};
const userService = require('../../services/user-service');
const Routes = require('../index/routes');


class UserRoutes extends Routes {

    login(req, res, next) {
        const {login} = req.body;
        const {password} = req.body;
        userService.checkLoginForm(login, password)
            .then(this.response(res))
            .catch(this.response(res))
    }


    logout(req, res, next) {

    }

}


module.exports = new UserRoutes();





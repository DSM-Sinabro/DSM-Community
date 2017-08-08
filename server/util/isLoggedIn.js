/**
 * middleware :: isLoggedIn
 * If any router mounts this middleware, 
 * unauthenticated users will not be able to access this request path.
 */
module.exports = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    }
    else {
        return res.sendStatus(401);
    }
}
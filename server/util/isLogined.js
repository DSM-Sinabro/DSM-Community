/**
 * middleware :: isLogined
 * If any router mounts this middleware, 
 * unauthenticated users will not be able to access this request path.
 */
module.exports = function(req, res, next){
    if(typeof req.session.passport === "undefined"){
        res.sendStatus(401);
        next();
    }
    else next();
}
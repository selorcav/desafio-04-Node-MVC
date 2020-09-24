var User = require("../models/user");
exports.createUser = function (req, res) {
    if (validate(req.body)) {
        let items = req.body
        User.create(items, function (err, newUsers) {
            if (err) return res.json({ error: err })
            res.redirect("/users")
        })
    } else {
        res.send("Todos los campos son requeridos");
    }
};

exports.all_users = async function(req, res, next){
    var rawUsers = await User.find({}).collation({ locale: 'es'}).sort({name:1})
    res.render("users",{
        title:"listado de usuarios",
        users: cleanUsers(rawUsers),
    });
};

function cleanUsers(users){
    return users.map(function(user){
        return {
           name: user.name.replace(/ñ/gi, 'nn'),
           lastname: user.lastname.replace(/ñ/gi , 'nn')
        }
    })
}

function validate(body){
    if(body.name==""||body.lastname==""||body.email==""||body.password==""){
        return false
    }else{
        return true
    }
}
exports.createUser = function(req, res){
    console.log(req.body);
    if(validate (req.body)){
        res.send('Hola');
    }else{
        res.send('Todos los campos son requeridos');
    }
    res.send('Probando');
}
function validate(body){
    if(body.name==""||body.lastname==""||body.email==""||body.password==""){
        return false
    }else{
        return true
    }
}
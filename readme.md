express --view=ejs
npm install
npm run start //Para ejecutar
npm install nodemon --save-dev //Instala nodemon

Pegar en scripts de package.json
"dev": "nodemon ./bin/www"

npm run dev

crear carpeta controllers
dentro de carpeta controllers, crear "users.js"

en archivo "users.js" de la carpeta "routes" reemplazar "res.send('respond with a resource');" 
por "res.render('users', { title: 'Vista de usuarios' });"

en carpeta "views" crear archivo "users.ejs"

en archivo "users.js" de carpeta "routes", pegar después del get esto
/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send('Probando');
});

en archivo "users.js" de carpeta "routes" pegar:

var usersController = require('../controllers/users')


en archivo "users.js" de carpeta controllers pegar:

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
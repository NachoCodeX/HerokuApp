const app = require('./app')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = require('http').Server(app);



server.listen(5000,'0.0.0.0',e=>{
  if(e) process.exit(1);
  console.log(`Server on PORT ${PORT}`);
});





// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const app = require('./app');
const server = require('http').Server(app)

const PORT = process.env.PORT || 4000


server.listen(PORT,'0.0.0.0',(e)=>{
  if(e) process.exit(1);
  console.log(`Server on port ${PORT}`);
  
});






// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('*', (req, res) => res.sendfile(path.join(__dirname,'public','spa-mat','index.html')))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

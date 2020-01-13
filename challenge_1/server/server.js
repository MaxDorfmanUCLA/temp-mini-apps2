const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running, Listening on port 3000...');
})

server.get('/events/:date/:_page/:_limit', (req, res) => {
    res.jsonp(req.query)
  })
  
  //http://localhost:3000/events?date=-300&_page=7
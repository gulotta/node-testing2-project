const server = require('./api/server')

server.listen(1234, () => {
    console.log("Port running on 1234")
})
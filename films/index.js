const server = require("./src/server");

const PORT=8002


server.listen(PORT,()=>{
    console.log(`server folms listening on ${PORT}`)
})

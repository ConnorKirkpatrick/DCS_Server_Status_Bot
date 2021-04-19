const ws = require("ws")
const net = require("net")
function server_connection(){
    try {
        const client = new net.Socket()
        //connection to BF coldwar 80's
        //once connected drop connection to prevent using server resources

        //now we can connect via TCP, need to send something to get the status and such

        //Alpens conn: 193.70.81.86:

        //let conn = client.connect({port: 10309, host: "116.202.241.164"}, function (){
        let conn = client.connect({port: 10309, host: "116.202.241.164"}, function (){
            console.log("Connection established")
            console.log(conn.read())
        })
    }
    catch (e) {
        console.log(e.message)
    }
}
module.exports = server_connection
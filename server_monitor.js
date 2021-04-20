const https = require("https")
function server_monitor(callback) {
    //using glowies very nicely made online tool for server stats: dcs.glowie.xyz/
    let options = {
        host: "dcs.glowie.xyz",
        path: "/",
        method: "GET"
    }
    let req = https.get(options, (res) => {
        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            let body = Buffer.concat(bodyChunks);
            let strBody = body.toString()
            if(strBody.indexOf("Hoggit") > -1){
                let serverString = strBody.substring(strBody.indexOf("Hoggit"))
                serverString = serverString.substring(0,serverString.indexOf('<tr'))
                let title = serverString.substring(serverString.indexOf("Hoggit"),serverString.indexOf("</a"))
                serverString = serverString.substring(serverString.indexOf("</a"))
                let ip = serverString.substring(serverString.indexOf("servers/")+8,serverString.indexOf(":"))
                let port = serverString.substring(serverString.indexOf(":")+1,serverString.indexOf("title")-2)
                let mission = serverString.substring(serverString.indexOf("title")+9,serverString.lastIndexOf("</a"))
                let players = serverString.substring(serverString.lastIndexOf("<td>")+4,serverString.lastIndexOf("</td>"))
                //console.log(title)
                //console.log(ip)
                //console.log(port)
                //console.log(mission)
                //console.log(players)
                data = [title,ip,port,mission,players]
                return callback(data)

            }
            else{
                return callback(null)
            }
        })
    })
}
module.exports = server_monitor
const fs = require("fs")
function setChannel(channelID){
    console.log(channelID)
    const data = JSON.parse(fs.readFileSync('./values.json','utf-8'))
    let temp = []
    data.forEach(dataPoint =>{
        console.log(dataPoint.serverMonitorName)
        console.log(dataPoint.ServerMonitorChannel)
        dataPoint.ServerMonitorChannel = channelID.trim()
        temp.push(dataPoint)
    })
    console.log(temp)
    fs.writeFileSync("./values.json",JSON.stringify(temp),'utf-8')
    console.log(data)
}

module.exports = setChannel
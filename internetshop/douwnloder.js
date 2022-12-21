import fs from "fs"
const data =  fs.readFileSync('./data.json', 'utf8')
data = JSON.parse(data)
data = data.map(d=>d.images)
data = data.flat()
//сюда обернуть for
const stream = axios({
    method: "GET",
    url: "http"+link,
    responseType: 'stream'
}).then(response=>{
    const w = response.data.pipe(fs.createWriteStream('./images' + localFilePath))
})
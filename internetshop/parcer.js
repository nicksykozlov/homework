import tress from 'tress'
import fs from 'fs'
import axios from 'axios'
import jsdom from 'jsdom'
const {JSDOM} = jsdom 


const q = tress(function(payload, done){
    console.log('hello ' + payload.name);
    done(null, payload.name);
    axios.get(payload)
    .then(data =>{
        const dom = new JSDOM(data.data)
        const tree ={}
        tree.price = dom.window.document.querySelectorAll('price')?.textContetnt ?? 0
        tree.name = dom.window.document.querySelectorAll('h1.main-title')?.textContetnt ?? ''
        tree.desc = dom.window.document.querySelectorAll('div.desc div.text')?.textContetnt ?? ''
        const container = ArrayFrom(dom.window.document.querySelectorAll('div.characteristics table tbody tr')) 
        const characteristics =[]
        container.forEach(tr=>{
            const tds = Array.from(tr.querySelectorAll('td'))
            characteristics.push({property:tds[0]?.textContetnt.trim()})
        })
        // const links = ArrayFrom(dom.window.document.querySelectorAll('a.name')) 
        done(null, links)
    })
    .catch(e=>{
        done(e, 'Ошибка Загрузки страниццы')
    })
    // someAsyncFunction(job, function(err, data){
    //     if (err) {
    //         done(err, 'some message');
    //     } else {
    //         done(null, 'anything');
    //     }
    // });
}, 2);
 
// assign a callbacks
q.drain = function(){
    console.log('Finished');
};
 
q.error = function(err) {
    console.log('Job ' + this + ' failed with error ' + err);
};
 
q.success = function(data) {
    data.forEach(link=>{
       
            fs.writeFileSync("./links.json", 'https://elki.by/' + link + ',\n', {flag: 'a+'})
               
    })
    
    console.log('Job ' + this + ' successfully finished. Result is ' + data);
}




const links = fs.readFileSync('./links.json', 'utf8')
links = links.split('\n')
links.forEach(link=>q.push(link))
console.log(links);
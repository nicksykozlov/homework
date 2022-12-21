import tress from 'tress'
import fs from 'fs'
import axios from 'axios'
import jsdom from 'jsdom'
const {JSDOM} = jsdom 
 
// create a queue object with worker and concurrency 2
const q = tress(function(payload, done){
    console.log('hello ' + payload.name);
    done(null, payload.name);
    axios.get(payload)
    .then(data =>{
        const dom = new JSDOM(data.data)
        const links = ArrayFrom(dom.window.document.querySelectorAll('a.name')) 
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
       
            fs.writeFileSync("./links.json", 'https://elki.by/' + link + '\n', {flag: 'a+'})
       
        
    })
    

    console.log('Job ' + this + ' successfully finished. Result is ' + data);
}
 
// add some items to the queue
for (let i = 1; i<3; i++){
    q.push('https://elki.by/catalog/iskusstvennye-elki/?PAGEN_1=' + i);
}

 

 

 
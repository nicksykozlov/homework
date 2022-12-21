import tress from 'tress'
import fs from 'fs'


 
// create a queue object with worker and concurrency 2
const q = tress(function(payload, done){
    console.log('hello ' + payload.name);
    done(null, payload.name);
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
    fs.writeFileSync("./links.json", data + '\n', {flag: 'a+'})
    console.log('Job ' + this + ' successfully finished. Result is ' + data);
}
 
// add some items to the queue
q.push({name: 'Bob'});
q.push({name: 'Alice'});
 

 

 
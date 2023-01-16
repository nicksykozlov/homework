import tress from 'tress';
import fs from 'fs';
import axios from "axios";
import jsdom from 'jsdom'

const {JSDOM} = jsdom;

const q = tress(function (payload, done) {
    console.log('hello ' + payload.name);
    axios.get(payload)
        .then(data => {
            const dom = new JSDOM(data.data);
            const links = Array.from(dom.window.document.querySelectorAll('.product-card-wrap a.name'));

            done(null, links);
        })
        .catch(e => {
            done(e, 'Ошибка загрузки страницы')
        })
}, 2);

// assign a callbacks
q.drain = function () {
    console.log('Finished');
};

q.error = function (err) {
    console.log('Job ' + this + ' failed with error ' + err);
};

q.success = function (data) {
    data.forEach(link => {
        fs.writeFileSync('./links.json', 'https://elki.by' +link + '\n', {flag: 'a+'})
    })
}
for (let i = 1; i <= 3; i++) {
    q.push('https://elki.by/catalog/iskusstvennye-elki/?PAGEN_1=' + i)
}

const canvas = document.body.querySelector('canvas');
const ctx = canvas.getContext('2d');
for (let count = 1; count<=3; count++){
    tree(count*200, 200);
}
function tree (x){
    for (let count = 1; count<=3; count++){
        triangle(x,count*50)
    }

}


triangle(200, 200);
function triangle(x,y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+100, y+50);
    ctx.lineTo(x-100, y+50);
    ctx.lineTo(x, y);
    ctx.fill()
}
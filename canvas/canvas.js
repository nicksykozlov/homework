// const canvas = document.body.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// for (let count = 1; count<=3; count++){
//     tree(count*200, 200);
// }
// function tree (x){
//     for (let count = 1; count<=3; count++){
//         triangle(x,count*50)
//     }

// }


// triangle(200, 200);
// function triangle(x,y){
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x+100, y+50);
//     ctx.lineTo(x-100, y+50);
//     ctx.lineTo(x, y);
//     ctx.fill()
//  }

var canvas = document.getElementById("canvas_star");
var ctx = canvas.getContext("2d");

function drawStar(cx, cy, spikes, maxR, minR, lineWidth, lineColor, bgColor) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - maxR)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * maxR;
        y = cy + Math.sin(rot) * maxR;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * minR;
        y = cy + Math.sin(rot) * minR;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - maxR)
    ctx.closePath();
    if(lineWidth) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;

        ctx.stroke();
    }
   
    ctx.fillStyle = bgColor;
    ctx.fill();

}

drawStar(150, 100, 5, 60, 30,16,'grey','green');
drawStar(450, 150, 16, 100, 40, 0,  0,  'orange');
drawStar(200, 350, 8,  100, 50, 15,   'gray', 'cornflowerblue');
drawStar(550, 450, 16, 100, 80, 15,   'gray', 'yellow');
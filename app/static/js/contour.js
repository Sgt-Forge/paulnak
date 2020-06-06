const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.getBoundingClientRect().width;
const height = canvas.getBoundingClientRect().height;
const origin = {x: width/2, y:height/2};

ctx.beginPath();

let start = 50;
for(; start <= 500; start += 20){
    let points = contour(start);
    ctx.moveTo(origin.x-start, origin.y);
    for  (let i = 0; i < points.length; ++i){
        let f1x =  points[i].x  + origin.x ;
        let f1y =  points[i].y  + origin.y;
        ctx.lineTo(f1x, f1y);
    }
    ctx.stroke();
}

function  contour(z) {
    const interval = 1;
    var count = -z;
    var points = [];
    while (count < z){
        var cosx =  Math.cos(count);
        var y  = Math.asin(z-Math.acos(cosx));
        points.push({x: count, y:y});
        count  += interval;
    }
    count = z;
    while (count >= -z){
        var cosx =  Math.cos(count);
        var y  = Math.asin(z-Math.acos(cosx));
        points.push({x: count, y:-y});
        count  -= interval;
    }
    return points;
}
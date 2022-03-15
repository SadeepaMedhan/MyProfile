
var colors = ['red','green','blue','yellow','pink','hotpink'];

var boxes = [$('#box1'),$('#box2'),$('#box3'),$('#box4'),$('#box5'),$('#box6')];

function changeColor() {

    let col = colors.pop();
    colors.unshift(col);

    for (var i in boxes) {
        boxes[i].css("background",colors[i]);
    }
}

setInterval(changeColor,400);
var interval;
var interval1;
var interval2;
var interval3;
var interval4;

$("#btnStart").click(function () {
    clearInterval(interval);
    interval = setInterval(changeFifthBoxColor, 100);
    changeFifthBoxColor();

    clearInterval(interval1);
    interval1 = setInterval(changeForthBoxColor, 100);
    changeForthBoxColor();

    clearInterval(interval2);
    interval2 = setInterval(changeThirdBoxColor, 100);
    changeThirdBoxColor();

    clearInterval(interval3);
    interval3 = setInterval(changeSecondBoxColor, 100);
    changeSecondBoxColor();

    clearInterval(interval4);
    interval4 = setInterval(changeFirstBoxColor, 100);
    changeFirstBoxColor();
});

$("#btnStop").click(function () {
    clearInterval(interval);
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    clearInterval(interval4);
});

var box1Colors = ["red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white", "white", "white", "white", "white", "white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4"];
count1 = 0;

function changeFifthBoxColor() {
    $("#box5").css('background-color', box1Colors[count1]);
    count1++;

    if (count1 == box1Colors.length) {
        count1 = 0;
    }
}

var box2Colors = ["white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white", "white", "white", "white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white"];
count2 = 0;

function changeForthBoxColor() {
    $("#box4").css('background-color', box2Colors[count2]);
    count2++;

    if (count2 == box2Colors.length) {
        count2 = 0;
    }
}

var box3Colors = ["white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white", "white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white"];
count3 = 0;

function changeThirdBoxColor() {
    $("#box3").css('background-color', box3Colors[count3]);
    count3++;

    if (count3 == box3Colors.length) {
        count3 = 0;
    }
}

var box4Colors = ["white", "white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white", "white"];
count4 = 0;

function changeSecondBoxColor() {
    $("#box2").css('background-color', box4Colors[count4]);
    count4++;

    if (count4 == box4Colors.length) {
        count4 = 0;
    }
}

var box5Colors = ["white", "white", "white", "white", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "red", "#bb2d3b", "brown", "indianred", "#dfc2c4", "white", "white", "white", "white"];
count5 = 0;

function changeFirstBoxColor() {
    $("#box1").css('background-color', box5Colors[count5]);
    count5++;

    if (count5 == box5Colors.length) {
        count5 = 0;
    }
}

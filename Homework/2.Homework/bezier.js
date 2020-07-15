const init = function () {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth * 0.7;
    ctx.canvas.height = window.innerHeight * 0.7;
    count = 0;
    control_points_x = [];
    control_points_y = [];
    ctx.lineWidth = 3;
    ctx.fillStyle = "black";
    first = true;
    rect_size = 13;
    arc_size = 7;
    multiple_curves = [];
    multiple_colors = []
    drag = false;
    dragMoved = false;
    pointMovedSrc = [];
    pointMovedDest = [];
    skipOne = false;
    defaultColor = "black";

}();

canvas.addEventListener('mousemove', e => {
    if (drag) {
        dragMoved = true;
    }
});

canvas.addEventListener('mousedown', function (evt) {
    let mousePos = getMousePos(canvas, evt);
    pointMovedSrc = [mousePos.x, mousePos.y];
    drag = true;


}, false);


//report the mouse position on click
canvas.addEventListener("click", function (evt) {
    if (drag && dragMoved) {
        let mousePos = getMousePos(canvas, evt);
        pointMovedDest = [mousePos.x, mousePos.y];
        movePoint();
    } else {
        let mousePos = getMousePos(canvas, evt);
        newPoint(mousePos.x, mousePos.y)
    }
    drag = false;
    dragMoved = false;

}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


function newPoint(x, y) {
    ctx.beginPath();
    if (count === 0 || count === 3) {
        ctx.rect(x - rect_size / 2, y - rect_size / 2, rect_size, rect_size);
    } else {
        ctx.arc(x, y, arc_size, 0, 2 * Math.PI);
    }

    ctx.fill();
    if (first) {
        first = false;
        control_points_x = [];
        control_points_y = [];
        ctx.moveTo(x, y);
        count = 0;
    }
    control_points_x.push(x);
    control_points_y.push(y);
    if (++count === 4) {

        count = 0;
        ctx.beginPath();
        drawCurve();
    }


}

function drawCurve() {
    ctx.strokeStyle = defaultColor;
    let distance = Math.abs(control_points_x[control_points_x.length - 1] - control_points_x[0]) + Math.abs(control_points_y[control_points_y.length - 1] - control_points_y[0]);
    let t, x, y;
    for (let point = 0; point <= distance; point++) {
        t = (point) / (distance - 1);
        x = (DeCastelje(control_points_x, 0, control_points_x.length - 1, t));
        y = (DeCastelje(control_points_y, 0, control_points_x.length - 1, t));
        ctx.lineTo(x, y);

    }
    ctx.stroke();
    //projection
    multiple_curves.push([control_points_x, control_points_y]);
    let last_index = control_points_x.length - 1
    control_points_x = [x, 2 * control_points_x[last_index] - control_points_x[last_index - 1]];
    control_points_y = [y, 2 * control_points_y[last_index] - control_points_y[last_index - 1]];
    count = 1;
    populateOptions();
    multiple_colors.push(defaultColor);

}

function DeCastelje(array, i, j, t) {
    if (j === 0)
        return array[i];
    return DeCastelje(array, i, j - 1, t) * (1 - t) + DeCastelje(array, i + 1, j - 1, t) * t;
}

function reDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let count = 0;
    let countLimit = 4;
    let ii = 0;
    multiple_curves.forEach(curve => {

        let [pointsX, pointsY] = curve;


        for (let i = 0; i < pointsX.length; i++) {

            if (pointsX.length === 5 && i == 1) {
                continue
            }

            ctx.beginPath();
            if (count === 0 || count === 3) {
                ctx.rect(pointsX[i] - rect_size / 2, pointsY[i] - rect_size / 2, rect_size, rect_size);
            } else {
                ctx.arc(pointsX[i], pointsY[i], arc_size, 0, 2 * Math.PI);
            }

            ctx.fill();
            if (++count === countLimit) {
                count = 0;
            }
        }
        ctx.strokeStyle = multiple_colors[ii++];
        ctx.beginPath();
        reDrawCurve(pointsX, pointsY);
    });

}

function reDrawCurve(control_points_x, control_points_y) {
    let distance = Math.abs(control_points_x[control_points_x.length - 1] - control_points_x[0]) + Math.abs(control_points_y[control_points_y.length - 1] - control_points_y[0]);
    let t, x, y;
    for (let point = 0; point <= distance; point++) {
        t = (point) / (distance - 1);
        x = (DeCastelje(control_points_x, 0, control_points_x.length - 1, t));
        y = (DeCastelje(control_points_y, 0, control_points_x.length - 1, t));
        ctx.lineTo(x, y);

    }
    ctx.stroke();


}

function movePoint() {

    let found = false;


    let [mouseSrcX, mouseSrcY] = pointMovedSrc;
    let [mouseDstX, mouseDstY] = pointMovedDest;
    let radius = 10;
    for (let i = 0; i < multiple_curves.length; i++) {
        let [pointsX, pointsY] = multiple_curves[i];

        for (let j = 0; j < pointsX.length; j++) {
            pX = pointsX[j];
            py = pointsY[j];
            if ((pX - mouseSrcX) ** 2 + (py - mouseSrcY) ** 2 < radius ** 2) {
                multiple_curves[i][0][j] = mouseDstX;
                multiple_curves[i][1][j] = mouseDstY;
                if (i + 1 <= multiple_curves.length - 1) {
                    multiple_curves[i + 1][0][0] = pointsX[pointsX.length - 1];
                    multiple_curves[i + 1][1][0] = pointsY[pointsY.length - 1];
                    multiple_curves[i + 1][0][1] = 2 * pointsX[pointsX.length - 1] - pointsX[pointsX.length - 2];
                    multiple_curves[i + 1][1][1] = 2 * pointsY[pointsY.length - 1] - pointsY[pointsY.length - 2];
                }
                found = true;
            }
        }
    }

    if (found) {
        let last_curve_index = multiple_curves.length - 1;
        let coordsX = multiple_curves[last_curve_index][0];
        let coordsY = multiple_curves[last_curve_index][1];
        last_index = coordsX.length - 1;
        control_points_x = [coordsX[last_index], 2 * coordsX[last_index] - coordsX[last_index - 1]];
        control_points_y = [coordsY[last_index], 2 * coordsY[last_index] - coordsY[last_index - 1]];
        skipOne = true;
        reDraw();
        count = 1;
        skipOne = false;
    }


}

function populateOptions() {
    let selectCurve = document.getElementById("selectCurve");
    selectCurve.options.length = 0;

    for (let i = 0; i < multiple_curves.length; i++) {
        let newOption = document.createElement("option");
        newOption.text = "" + (i + 1);
        selectCurve.add(newOption);
    }
    let newOption = document.createElement("option");
    newOption.text = "";
    selectCurve.add(newOption);
    selectCurve.value = "";


}

function deleteCurve() {
    let selectCurve = document.getElementById("selectCurve");
    if (selectCurve.value != "") {
        let chosen = selectCurve.selectedIndex;
        if (chosen > -1) {
            multiple_curves.splice(chosen, 1);
            multiple_colors.splice(chosen, 1);
        }

        populateOptions();
        if (multiple_curves.length > 0) {
            let [control_points_x, control_points_y] = multiple_curves[multiple_curves.length - 1];
            let coords_length = control_points_x.length;
            ctx.moveTo(control_points_x[coords_length - 1], control_points_y[coords_length - 1]);

        } else {
            first = true;
        }
        reDraw();
        let arrayX = multiple_curves[multiple_curves.length - 1][0];
        let arrayY = multiple_curves[multiple_curves.length - 1][1];
        let last_index = arrayX.length - 1
        control_points_x = [arrayX[last_index], 2 * arrayX[last_index] - arrayX[last_index - 1]];
        control_points_y = [arrayY[last_index], 2 * arrayY[last_index] - arrayY[last_index - 1]];
        count = 1;
    }


}

function newCurve() {
    first = true;
    count = 0;
    reDraw();
}

function changeColor() {
    let selectCurve = document.getElementById("selectCurve");
    console.log(selectCurve.value);
    if (selectCurve.value != "") {
        let chosen = selectCurve.selectedIndex;
        if (chosen > -1) {
            multiple_colors[chosen] = document.getElementById("colorPicker").value;
            ;
        }
        reDraw();

    } else {
        defaultColor = document.getElementById("colorPicker").value;
    }

}
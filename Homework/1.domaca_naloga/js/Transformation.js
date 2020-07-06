// const Matrix4f = require('./Matrix4f.js');
// const Vector4f = require('./Vector4f.js');


class Transformation {

    constructor() {
        this.matrika = new Matrix4f([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);
    }

    static multiply(input1, input2) {


        let x = 0;
        x += input1.array[0][0] * input2.x;
        x += input1.array[0][1] * input2.y;
        x += input1.array[0][2] * input2.z;
        x += input1.array[0][3] * input2.h;


        let y = 0;
        y += input1.array[1][0] * input2.x;
        y += input1.array[1][1] * input2.y;
        y += input1.array[1][2] * input2.z;
        y += input1.array[1][3] * input2.h;

        let z = 0;
        z += input1.array[2][0] * input2.x;
        z += input1.array[2][1] * input2.y;
        z += input1.array[2][2] * input2.z;
        z += input1.array[2][3] * input2.h;

        return new Vector4f(x, y, z);
    }

    translate(input) {
        let translationMatrix = new Matrix4f([
            [1, 0, 0, input.x],
            [0, 1, 0, input.y],
            [0, 0, 1, input.z],
            [0, 0, 0, 1],
        ]);
        this.matrika = Matrix4f.multiply(translationMatrix, this.matrika)
    }

    scale(input) {
        let scaleMatrix = new Matrix4f([
            [input.x, 0, 0, 0],
            [0, input.y, 0, 0],
            [0, 0, input.z, 0],
            [0, 0, 0, 1],
        ]);
        this.matrika = Matrix4f.multiply(scaleMatrix, this.matrika)
    }

    rotateX(input) {
        let rotateXMatrix = new Matrix4f([
            [1, 0, 0, 0],
            [0, Math.cos(input), -Math.sin(input), 0],
            [0, Math.sin(input), Math.cos(input), 0],
            [0, 0, 0, 1],
        ]);
        this.matrika = Matrix4f.multiply(rotateXMatrix, this.matrika)

    }

    rotateY(input) {
        let rotateYMatrix = new Matrix4f([
            [Math.cos(input), 0, Math.sin(input), 0],
            [0, 1, 0, 0],
            [-Math.sin(input), 0, Math.cos(input), 0],
            [0, 0, 0, 1],
        ]);
        this.matrika = Matrix4f.multiply(rotateYMatrix, this.matrika)
    }

    rotateZ(input) {
        let rotateZMatrix = new Matrix4f([
            [Math.cos(input), -Math.sin(input), 0, 0],
            [Math.sin(input), Math.cos(input), 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);
        this.matrika = Matrix4f.multiply(rotateZMatrix, this.matrika)
    }

    transformPoint(input) {
        return Transformation.multiply(this.matrika, input)
    }


}

// module.exports = Transformation;

// t = new Transformation();
// console.log(t.matrika);
//
//
// t.translate(new Vector4f(1,1,1));
// console.log(t.matrika);





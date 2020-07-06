class Matrix4f {


    constructor(array) {
        if (!(array instanceof Array)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        if (array.length === 4 && array[0].length === 4)
            this.array = array;
        else {
            console.log("Error: Wrong size of the matrix.")
        }
    }

    static negate(input) {
        if (!(input instanceof Matrix4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        let temp_array = [];
        for (let i = 0; i < input.array.length; i++) {
            temp_array.push([]);
            for (let j = 0; j < input.array[i].length; j++) {
                temp_array[i].push(-input.array[i][j]);
            }
        }
        return new Matrix4f(temp_array);
    }

    static add(input1, input2) {
        if (!(input1 instanceof Matrix4f) || !(input2 instanceof Matrix4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        if (input1.array.length !== input2.array.length || input1.array[0].length !== input2.array[0].length) {
            console.log("Error, Wrong dimensions.");
            return null;
        }
        let temp_array = [];
        for (let i = 0; i < input1.array.length; i++) {
            temp_array.push([]);
            for (let j = 0; j < input1.array[i].length; j++) {
                temp_array[i].push(input1.array[i][j] + input2.array[i][j]);
            }
        }
        return new Matrix4f(temp_array);
    }

    static transpose(input) {
        if (!(input instanceof Matrix4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        let temp_array = [];
        for (let j = 0; j < input.array[0].length; j++) {
            temp_array.push([]);
            for (let i = 0; i < input.array.length; i++) {
                temp_array[j].push(input.array[i][j]);
            }
        }
        return new Matrix4f(temp_array);
    }

    static multiplyScalar(input1, input2) {
        if (!(input2 instanceof Matrix4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        let temp_array = [];
        for (let i = 0; i < input2.array.length; i++) {
            temp_array.push([]);
            for (let j = 0; j < input2.array[i].length; j++) {
                temp_array[i].push(input1 * input2.array[i][j]);
            }
        }
        return new Matrix4f(temp_array);
    }

    static multiply(input1, input2) {
        if (!(input1 instanceof Matrix4f) || !(input2 instanceof Matrix4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        if (input1.array[0].length !== input2.array.length) {
            console.log("Error, Wrong dimensions.");
            return null;
        }
        let temp_array = [];
        for (let i = 0; i < input1.array.length; i++) {
            temp_array.push([]);

            for (let j = 0; j < input1.array[i].length; j++) {
                let vsota = 0;
                for (let st = 0; st < input1.array.length; st++) {
                    vsota += input1.array[i][st] * input2.array[st][j];
                }
                temp_array[i].push(vsota);
                vsota = 0;
            }
        }
        return new Matrix4f(temp_array);
    }


}

// module.exports = Matrix4f;
//
// let a = new Matrix4f([
//     [1, 2, 3, 4],
//     [1, 1, 8, 1],
//     [5, 6, 7, 8],
//     [1, 1, 1, 1],
// ]);
//
// console.log(a);
//
// let b = new Matrix4f([
//     [1, 1, 1, 1],
//     [1, 1, 2, 1],
//     [2, 1, 1, 5],
//     [1, 1, 1, 9],
// ]);
// console.log(b);
//
// let negation = Matrix4f.negate(a);
// console.log(negation);
//
// let addition = Matrix4f.add(a, b);
// console.log(addition);
//
// let transposition = Matrix4f.transpose(a);
// console.log(transposition);
//
// let multiplicationScalar = Matrix4f.multiplyScalar(2, a);
// console.log(multiplicationScalar);
//
// let multiplication = Matrix4f.multiply(a, b);
// console.log(multiplication);
//
//
//

class Vector4f {

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.h = 1;
    }

    static negate(input) {
        if (!(input instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        return new Vector4f(-input.x, -input.y, -input.z);
    }

    static add(input1, input2) {
        if (!(input1 instanceof Vector4f) || !(input2 instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        return new Vector4f(input1.x + input2.x, input1.y + input2.y, input1.z + input2.z);
    }

    static scalarProduct(input1, input2) {
        if (!(input2 instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        return new Vector4f(input1 * input2.x, input1 * input2.y, input1 * input2.z);
    }

    static dotProduct(input1, input2) {
        if (!(input1 instanceof Vector4f) || !(input2 instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        return input1.x * input2.x + input1.y * input2.y + input1.z * input2.z;
    }

    static crossProduct(input1, input2) {
        if (!(input1 instanceof Vector4f) || !(input2 instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        return new Vector4f(
            input1.y * input2.z - input1.z * input2.y,
            input1.z * input2.x - input1.x * input2.z,
            input1.x * input2.y - input1.y * input2.x
        );
    }

    static length(input) {
        if (!(input instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        return Math.sqrt(input.x ** 2 + input.y ** 2 + input.z ** 2);
    }

    static normalize(input) {
        if (!(input instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        let len = Vector4f.length(input);
        if (len === 0) {
            console.log("Error: length is 0.");
            return null;
        }
        return new Vector4f(input.x / len, input.y / len, input.z / len);
    }

    static project(input1, input2) {
        if (!(input1 instanceof Vector4f) || !(input2 instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        let len = Vector4f.length(input2) ** 2;
        if (len === 0) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        let dot = Vector4f.dotProduct(input1, input2);
        return Vector4f.scalarProduct(dot / len, input2);
    }

    static cosPhi(input1, input2) {
        if (!(input1 instanceof Vector4f) || !(input2 instanceof Vector4f)) {
            console.log("Error: Wrong argument type.");
            return null;
        }
        if ((Vector4f.length(input1) === 0) || (Vector4f.length(input2)) === 0) {
            console.log("Error: length is 0.");
            return null;
        }
        return Vector4f.dotProduct(input1, input2) / (Vector4f.length(input1) * Vector4f.length(input2));
    }


}

// module.exports = Vector4f;

// let a = new Vector4f(1,4,8);
// console.log(a);
//
// let b = new Vector4f(7,2,9);
// console.log(b);
//
// // let negation = Vector4f.negate(a);
// let negation = Vector4f.negate(a);
// console.log(negation);
//
// let addition = Vector4f.add(a, b);
// console.log(addition);
//
// let scalar = Vector4f.scalarProduct(2, a);
// console.log(scalar);
//
// let dot = Vector4f.dotProduct(a, b);
// console.log(dot);
//
// let cross = Vector4f.crossProduct(a, b);
// console.log(cross);
//
// let length = Vector4f.length(a);
// console.log(length);
//
// let norm = Vector4f.normalize(a);
// console.log(norm);
//
// let proj = Vector4f.project(a, b);
// console.log(proj);
//
// let angle = Vector4f.cosPhi(a, b);
// console.log(angle);
//

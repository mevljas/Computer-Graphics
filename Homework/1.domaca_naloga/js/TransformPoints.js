// const Matrix4f = require('./Matrix4f.js');
// const Vector4f = require('./Vector4f.js');
// const Transformation = require('./Transformation.js');
// const PointManager = require('./PointManager.js');
class TransformPoints {


    static transform(vectors) {

        let t = new Transformation();
        // console.log(t.matrika);

        t.translate(new Vector4f(1.25, 0, 0));
        console.log(t.matrika);
        t.rotateZ(Math.PI / 3);
        console.log(t.matrika);
        t.translate(new Vector4f(0, 0, 4.15));
        console.log(t.matrika);
        t.translate(new Vector4f(0, 3.14, 0));
        console.log(t.matrika);
        t.scale(new Vector4f(1.12, 1.12, 1));
        console.log(t.matrika);
        t.rotateY(5 * Math.PI / 8);
        console.log(t.matrika);

        // console.log(t.matrika);
        let transformated_vectors = [];
        for (let i = 0; i < vectors.length; i++) {
            transformated_vectors.push(t.transformPoint(vectors[i]));
        }
        return transformated_vectors;
        // PointManager.write(transformated_vectors);
    }


}

// module.exports = TransformPoints;
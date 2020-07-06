// const TransformPoints = require('./TransformPoints.js');
// const Vector4f = require('./Vector4f.js');


class PointManager {
    static read() {
        let vectors = [];
        let textArea = document.getElementById("input");
        let arrayOfLines = textArea.value.split("\n");
        for (let i = 0; i < arrayOfLines.length; i++) {
            const line = arrayOfLines[i].split(" ");
            if (line[0] === "v") {
                vectors.push(new Vector4f(parseFloat(line[1]), parseFloat(line[2]), parseFloat(line[3])));
            }
        }

        textArea.value = "";
        let transformated_vectors = TransformPoints.transform(vectors);
        PointManager.write(transformated_vectors);

    }

    static write(vectors) {
        let textArea = document.getElementById("output");
        textArea.value = "";

        for (let i = 0; i < vectors.length; i++) {
            textArea.value += vectors[i].x + " " + vectors[i].y + " " + vectors[i].z + "\n";
        }


    }


}

// module.exports = PointManager;









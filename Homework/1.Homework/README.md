# 1. Homework
## Vector4f (1 point)
Implement the Vector4f class in JavaScript, which should store the coordinates of the 3D spatial vector and contain methods (expected types are defined in parentheses):

- **<Vector4f> out negate (<Vector4f> input)**, the method should return a new vector representing the negated input vector,
- **<Vector4f> out add (<Vector4f> input1, <Vector4f> input2)**, the method should return a new vector representing the sum of the input vectors,
- **<Vector4f> out scalarProduct (<float> input1, <Vector4f> input2)**, the method should return a new vector that is an input vector multiplied by a scalar,
- **<float> out dotProduct (<Vector4f> input1, <Vector4f> input2)** (scalar product), the method should return the float value of the scalar product of the input vectors,
- **<Vector4f> out crossProduct (<Vector4f> input1, <Vector4f> input2)** (vector product), the method should return a new vector that is the result of the vector product of the input vectors,
- **<float> out length (<Vector4f> input)**, the method should return the float value of the length of the input vector,
- **<Vector4f> out normalize (<Vector4f> input)**, the method should return a new vector representing the normalized input vector,
- **<Vector4f> out project (<Vector4f> input1, <Vector4f> input2)**, the method should return a new vector resulting from the projection of one vector onto another,
- **<float> out cosPhi (<Vector4f> input1, <Vector4f> input2)**, the method should return the float value of the cosine of the angle between the vectors.
  
The fourth component of the vector is a homogeneous component.  

The class should point out any inconsistencies in operations.  

## Matrix4f (1 point)
Implement the Matrix4f class in JavaScript, which should store the values of the 4x4 matrix in its own variable. The class should allow the storage of matrices with float values ​​and contain the following static methods for:

- **<Matrix4f> out negate (<Matrix4f> input)**, the method should return a new matrix representing the negated input matrix,
- **<Matrix4f> out add (<Matrix4f> input1, <Matrix4f> input2)**, the method should return a new matrix representing the sum of the input matrices,
- **<Matrix4f> out transpose (<Matrix4f> input)**, the method should return a new matrix representing the transposed input matrix,
- **<Matrix4f> out multiplyScalar (<float> input1, <Matrix4f> input2)**, the method should return a new matrix representing the scalar multiplied by the scalar,
- **<Matrix4f> out multiply (<Matrix4f> input1, <Matrix4f> input2)**, the method should return a new matrix that is the result of multiplying two matrices.
  
The class should point out any inconsistencies in operations.

## PointManager (1 point)
In JavaScript, implement the PointManager class, which allows you to read points from the input field of an HTML document (textarea) into a list of instances of the Vector4f class. The class also allows the list of points to be written to the input field of the HTML document (textarea) in the same format as it reads from the input file. The points in the input and output fields are defined as shown below:
```
v x1 y1 z1
v x2 y2 z2
v x3 y3 z3
```
## Transformation (2 points)
1. In JavaScript, implement the Transformation class, which should store the transformation matrix in a private variable of type Matrix4f and have the following methods:

- **translate (<Vector4f> input)**, which should receive as an parameter an instance of the Vector4f class and modify the stored matrix accordingly,
- **scale (<Vector4f> input)**, which should receive as a parameter an instance of the Vector4f class and modify the stored matrix accordingly,
- **rotateX (<float> input)**, which takes one parameter to modify the transformation matrix to rotate around the x-axis,
- **rotateY (<float> input)**, which accepts one parameter to modify the transformation matrix for rotation around the y axis,
- **rotateZ (<float> input)**, which takes one parameter to modify the transformation matrix to rotate around the z axis,
- **transformPoint (<Vector4f> input)**, which should receive a point in Vector4f format and return the transformed point in the same format.
  
2. Implement the TransformPoints class in JavaScript, which demonstrates the use of all of the above classes. The class should read the points from the input input field, transform them according to the instructions below, and write the transformed points to the intended output input field of the HTML document.

Instructions for transforming points:  

1. translation along the x-axis by 1.25
2. rotation about the z axis by an angle pi / 3
3. translation along the z axis by 4.15
4. translation along the y  axis by 3.14
5. scalation along the x and y axes by 1.12
6. rotation about the y axis by an angle of 5 * pi / 8

## Summary
As part of the task, implement the Vector4f, Matrix4f, PointManager, Transformation, and TransformPoints classes with the required functionalities.  

Develop all the functionality in the program using the basic functionalities of JavaScript and do not use additional libraries.

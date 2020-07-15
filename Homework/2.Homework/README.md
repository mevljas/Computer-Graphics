# 2. Homework
As part of your second homework assignment, implement a program for drawing cubic Bezier splines in 2D space. The drawing in the program should be defined on the usual HTML5 canvas (HTML5 canvas - **NOT WebGL**). The program should allow the following things:
  
## Drawing curves (2 points):

1. Draw individual nodes of the curve. New nodes are added to the canvas by clicking on the appropriate place. Mark the nodes (circles for the approximated nodes and squares for the interpolated ones). The curve should be plotted when enough nodes are defined.
2. Drawing connected curves from successive splices. In doing so, make sure that the individual splices are smoothly connected (level 1 C1 continuity).
3. When drawing curves, make sure they are drawn enough, but not too accurately. Define the accuracy of curve plotting accordingly.
  
## Editing curves (2 points):

1. All nodes of the curves can be moved subsequently. Realize this so that the user can grab the node and move it with the mouse.
2- Implement the option of marking and deleting curve splices.

## Changing curve properties (1 point):

1. The program should allow the possibility of drawing a new curve,
2. The program should allow you to change the color of the curves.

## Summary

Implement the program in one html file and one js, which can contain several classes:

- **bezier.html**
- **bezier.js**

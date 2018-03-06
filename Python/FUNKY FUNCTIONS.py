#-------------------------------------------------------------------------------
# Project Title:
# Purpose:
#
# Author:      Your Name Here
#
# Created:     01/11/2016
#
# As a WMCI Computer Science student, I state on my honour that I will:
# - cite any help that I have received (from other students, forums, etc.) on this assignment
# - not share actual program code with others. I realize that I am ENCOURAGED to discuss my approaches to solving problems, but that I should not share actual code.
# - be ready to explain any parts of the code I submit. I know that if I don't understand what something does, it doesn't belong in my assignment.
#-------------------------------------------------------------------------------

import turtle

def drawsquare(turtleName, size, numOfBoxes):
    turtleName.pensize(6)
    turtleName.pencolor("pink")
    for layers in range(numOfBoxes):
        for restOfSquare in range(4):
            turtleName.left(90)
            turtleName.forward(size)
            turtleName.left(90)
            turtleName.forward(size/2)
            size = size + 20
            turtleName.right(90)
            turtleName.forward(10)

jerry = turtle.Turtle("turtle")
face = turtle.Screen()

drawsquare(jerry, 20, 5)

face.mainloop()

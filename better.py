#-------------------------------------------------------------------------------
# Project Title:
# Purpose:
#
# Author:      Your Name Here
#
# Created:     26/10/2016
#
# As a WMCI Computer Science student, I state on my honour that I will:
# - cite any help that I have received (from other students, forums, etc.) on this assignment
# - not share actual program code with others. I realize that I am ENCOURAGED to discuss my approaches to solving problems, but that I should not share actual code.
# - be ready to explain any parts of the code I submit. I know that if I don't understand what something does, it doesn't belong in my assignment.
#-------------------------------------------------------------------------------

import turtle

aScreen = turtle.Screen()

ethanHunt = turtle.Turtle()
ethanHunt.shape("turtle")

ethanHunt.speed(0)

for secondShape in range(2):
    for shape in range(4):
        for side in range(4):
                for inSide in range(2):
                    ethanHunt.forward(90)
                    ethanHunt.left(90)


                ethanHunt.forward(90)
                ethanHunt.right(90)

        ethanHunt.penup()
        ethanHunt.forward(180)
        ethanHunt.pendown()
        ethanHunt.left(90)

    ethanHunt.forward(90)
    ethanHunt.penup()
    ethanHunt.right(90)
    ethanHunt.forward(37)
    ethanHunt.left(90)
    ethanHunt.pendown()
    ethanHunt.left(45)




aScreen.mainloop()
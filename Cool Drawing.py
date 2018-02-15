import turtle
akela = turtle.Turtle("turtle")
pad = turtle.Screen()



def circleInd(turtle, radius):
    turtle.circle(radius)


def drawmultiplecirlces(turtle, numberOfCircles, radius):
    colorList = ["black", "blue", "red", "orange", "yellow", "green"]
    for circles in numberOfCircles:
        circleInd(turtle, radius)


drawmultiplecircles(akela, 5, 6)


pad.mainloop()

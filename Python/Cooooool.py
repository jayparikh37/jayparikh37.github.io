import turtle
akela = turtle.Turtle("turtle")
pad = turtle.Screen()
turtle.speed(0)
def drawMultipleCircles(turtle, startingradius, numberOfCircles, colorone, colortwo):
    colorPoint = 1
    otherStart = startingradius
    for cirlcles in range(numberOfCircles):
        if colorPoint % 2 == 0:
            turtle.pencolor("black")
        else: turtle.pencolor("red")
        turtle.circle(startingradius)
        startingradius = startingradius * 2
        turtle.penup()
        turtle.goto(0, -startingradius/2)
        turtle.pendown()
        colorPoint = colorPoint + 1
    for cirlcles in range(numberOfCircles):
        if colorPoint % 2 == 0:
            turtle.pencolor("black")
        else: turtle.pencolor("red")
        turtle.circle(otherStart)
        otherStart = otherStart * 2
        turtle.penup()
        turtle.goto(0, otherStart/2)
        turtle.pendown()
        colorPoint = colorPoint + 1


















drawMultipleCircles(akela, 5, 2, "red", "green")


pad.mainloop()

import turtle

def drawsegment(nameOfTurtle, numberOfSegments):
    ''' draw as many segments of a caterpillar as you like, not drawing the head

        the arguments for this function are: the name of the turtle you would like to use,
        followed by the muber of segments you want to draw formatted thus;
        drawsegement(nameOfTurtle, numberOfSegment):
    '''

    for segments in range(numberOfSegments):
        nameOfTurtle.forward(20)
        nameOfTurtle.pencolor("blue")
        nameOfTurtle.right(90)
        nameOfTurtle.forward(10)
        nameOfTurtle.pencolor("red")
        nameOfTurtle.right(90)
        nameOfTurtle.forward(20)
        nameOfTurtle.pencolor("yellow")
        nameOfTurtle.right(90)
        nameOfTurtle.forward(10)
        nameOfTurtle.pencolor("red")
        nameOfTurtle.left(90)
        nameOfTurtle.forward(10)
        nameOfTurtle.pencolor("blue")
        nameOfTurtle.right(90)
        nameOfTurtle.forward(20)
        nameOfTurtle.right(90)
        nameOfTurtle.forward(40)
        nameOfTurtle.right(90)
        nameOfTurtle.forward(20)
        nameOfTurtle.right(90)
        nameOfTurtle.forward(10)
        nameOfTurtle.left(180)
        nameOfTurtle.forward(10)
        nameOfTurtle.penup()
        nameOfTurtle.forward(10)
        nameOfTurtle.pendown()


def drawcaterpillar(nameOfTurtle, segmentT):
    nameOfTurtle.speed(5)
    drawsegment(nameOfTurtle, segmentT)
    nameOfTurtle.left(180)
    nameOfTurtle.penup()
    nameOfTurtle.forward(10)
    nameOfTurtle.pendown()
    nameOfTurtle.forward(40 * segmentT) #return to  front of animal
    nameOfTurtle.right(90)
    nameOfTurtle.forward(20)
    nameOfTurtle.right(90)
    nameOfTurtle.pencolor("white")
    nameOfTurtle.forward(40)
    nameOfTurtle.left(90)
    nameOfTurtle.pencolor("black")
    nameOfTurtle.forward(30)
    nameOfTurtle.penup()
    nameOfTurtle.left(90)
    nameOfTurtle.forward(20)
    nameOfTurtle.left(90)
    nameOfTurtle.forward(15)
    nameOfTurtle.left(90)
    nameOfTurtle.pendown()
    nameOfTurtle.circle(20)
    nameOfTurtle.left(180)
    nameOfTurtle.penup()
    nameOfTurtle.forward(20)
    nameOfTurtle.right(90)
    nameOfTurtle.pendown()
    nameOfTurtle.forward(15)
    nameOfTurtle.left(180)
    nameOfTurtle.forward(30)






lilGuy = turtle.Turtle("turtle")

amarsForehead = turtle.Screen()

drawcaterpillar(lilGuy, 7)

amarsForehead.mainloop()

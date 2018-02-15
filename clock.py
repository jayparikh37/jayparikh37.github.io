import turtle

aquarium = turtle.Screen()
aquarium.bgcolor("lightgreen")

turtle.speed(0)

cole = turtle.Turtle()
cole.shape("turtle")
cole.color("blue")
cole.pensize(4)

cole.stamp()

for something in range(12):
    cole.penup()
    cole.forward(150)
    cole.pendown()
    cole.forward(20)
    cole.penup()
    cole.forward(20)
    cole.stamp()
    cole.goto(0,0)
    cole.left(360/12)

aquarium.mainloop()
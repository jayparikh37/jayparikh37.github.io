import turtle

aScreen = turtle.Screen()

jerryMaguire = turtle.Turtle()
jerryMaguire.shape("turtle")

for side in range(4):
     jerryMaguire.forward(90)
     jerryMaguire.left(90)
     for inSide in range(2):
        jerryMaguire.forward(90)
        jerryMaguire.right(90)






aScreen.mainloop()
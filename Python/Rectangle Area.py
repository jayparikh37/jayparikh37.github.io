length = input("what is the length?")
width = input("what is the width")
unit = input("what unit of measurement are we using")

length = float(length)
width = float(width)
unit = str(unit)

area = length * width
area = str(area)

print("the area is " + area + " " + unit)
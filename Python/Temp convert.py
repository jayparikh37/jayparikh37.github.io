#######################################################
# Jay Parikh
# Computer Science 20
# April 4, 2013
#
# Temperature Conversion Program
# Purpose: To convert a temperature from celsius to fahrenheit.
#######################################################

tempInit = "7539"
tempInit = input("what is the temprature") #initial user input

while tempInit == str(tempInit):
    try:
        tempInit = float(tempInit)
        beginOper = 1
    except ValueError:
        tempInit = input("Oops!  That was no valid number.  Try again...")
        beginOper = 0
        beginOper = int(beginOper)




if beginOper == 1:
    initUnit = input("what unit is this in?")
    operation = input("would you like to convert to faranheit or celcius or kelvin") #where the user decides what conversion
    beginOper = 1
    beginOper = int(beginOper)




if beginOper == 1:
    if operation == "celcius":
        if initUnit == "faranheit":
            tempInit = (tempInit - 32) * 0.556
            tempInit = str(tempInit)
            print(tempInit)

        elif initUnit == "kelvin":
            tempInit = tempInit + 273.15
            tempInit = str(tempInit)
            print(tempInit)
        else:
            print("invalid input")


    if operation == "faranheit":
        if initUnit == "celcius":
            tempInit = (tempInit * 1.8) + 32
            tempInit = str(tempInit)
            print(tempInit)
        elif initUnit == "kelvin":
            tempInit = (tempInit + 459.67) * (5/9)
            tempInit = str(tempInit)
            print(tempInit)

        else:
            print("invalid input")


    if operation == "kelvin":
        if initUnit =="celcius":
            tempInit = tempInit - 273.15
            tempInit = str(tempInit)
            print(tempInit)
        elif initUnit == "faranheit":
            tempInit = (tempInit - 32) * (5/9) + 273.15
            tempInit = str(tempInit)
            print(tempInit)

        else:
            print("invalid input")

else:
    print("invalid input")

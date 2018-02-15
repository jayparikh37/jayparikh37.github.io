currentTime = input("What time is it in 24 hour time??")
timeToGo = input("How many hours is the alarm aet to go off in??")

currentTime = int(currentTime)
timeToGo = int(timeToGo)

while timeToGo > 0:
    currentTime = currentTime + 1
    timeToGo = timeToGo -1
    if currentTime == 24:
        currentTime = 0
print(currentTime)
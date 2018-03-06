currentDay = input("input the current day")
daysTill = input("how many days will you be gone")

currentDay = int(currentDay)
daysTill = int(daysTill)

while daysTill > 0:
    currentDay = currentDay + 1
    daysTill = daysTill - 1
    if currentDay == 6:
        currentDay = 0

print(currentDay)
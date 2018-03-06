currentHour = input("what hour is it in 24 hour time")
hoursTill = input("how many hours till the alarm goes off")

currentHour = int(currentHour)
hoursTill = int(hoursTill)

total = currentHour + hoursTill

answer = total % 24
answer = str(answer)

print("the alarm will go off at " + answer)

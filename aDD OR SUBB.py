
operation = input("add or subtract")

firstN = input("please enter your first number")
secondN = input("please enter your second number")

firstN = int(firstN)
secondN = int(secondN)

ans1 = firstN + secondN
ans1 = str(ans1)

ans2 = firstN - secondN
ans2 = str(ans2)

if operation == "add":
    print("the sum is " + ans1)

elif operation == "subtract":
    print("the difference is " + ans2)
else:
    print("lol ur dumb")

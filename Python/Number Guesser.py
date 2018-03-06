import random
comp = random.randrange(0,50)
print(comp)
count = 0
guess = -1
while guess != comp:
    guess = input("Guess")
    guess = int(guess)
    if guess > comp:
        print("too big")
        count = count + 1
    elif guess == comp:
        print("okay")
        count = count + 1
        count = str(count)
        print("it took you  " + count + " tries")
    else:
        print("too small")
        count = count + 1


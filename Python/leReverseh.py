def leReverseh(phrase):
    newWord = ""
    wordLength = len(phrase)
    letterToGrab = wordLength - 1
    while letterToGrab >=0:
        newWord = newWord + phrase[letterToGrab]
        letterToGrab = letterToGrab - 1
    return newWord

print(leReverseh("anna"))

def punctuationFixer(somePhrase):
    '''fixes punctuation'''
    newPhrase = ""
    punctuationToKill = '''`~!:;'",./?-()'''
    for letter in somePhrase:
        if letter not in punctuationToKill:
            newPhrase = newPhrase + letter
    for letter in somePhrase:
        if letter in punctuationToKill:
            newPhrase = newPhrase + letter
    return newPhrase



def pigLatinWTranslator(text):
    '''Takes the text you put in and gives you pig latin'''
    piglat = ""
    vowels = "aeiouyAEIOUY"
    if text[0] in vowels:
        piglat = text[1:] + "yay"                       #vowel check and translate
    else:
        if text[1] in vowels:
            piglat = text[1:] + text[:1] + "ay"
        else:
            if text[2] in vowels:
                piglat = text[2:] + text[:2] +"ay"
            else:
                if text[3] in vowels:
                    piglat = text[3:] + text[:3] + "ay"
    return piglat

def capsCheck(wordsB):
    caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    wordF = wordsB[0]
    if wordF in caps:
        wordFn = wordF.lower()
        wordsTwo = pigLatinWTranslator(wordsB)
        wordsThree = punctuationFixer(wordsTwo)
        wordsFour = wordsThree[1:]
        wordsFirst = wordsThree[0]
        wordsFirst = wordsFirst.upper()
        words = wordsFirst + wordsFour
    else:
        wordsTwo = pigLatinWTranslator(wordsB)
        wordsThree = punctuationFixer(wordsTwo)
        words = wordsThree
    return words

def jerryProof(words):
    symbolsOfCancer = "`~@#$%^&*()-_=+[{]};:'/"
    for letters in words:
        if letters in symbolsOfCancer:
            words = "jerry go away"

    return words

def pigLatinPTranslator(largeText):
    '''Will Take Text Input and run individual words through pigLatinWTranslator() Script'''
    finalLatin = ""
    textList = largeText.split()
    finalWords = ""
    for wordsB in textList:
        try:                                    #checks to see if the item being translated is a number
            wordsB = int(wordsB)
            words = wordsB
        except ValueError:
            words = jerryProof(wordsB)
            if words == "jerry go away":
                return words
            else:
                words = capsCheck(wordsB)           #if the item

        words = str(words)

        finalLatin = finalLatin + " " + words

    return finalLatin


print(pigLatinPTranslator("How. are you. I am Fine.")) #type in a phrase of your choice and run



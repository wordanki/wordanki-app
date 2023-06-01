export const splitedPhrase = (phrase, isNewWord) => {
    return [
        (!isNewWord ? "*" : "") + phrase.slice(0, phrase.indexOf("[")),
        phrase.slice(phrase.indexOf("[") + 1, phrase.indexOf("]")),
        phrase.slice(phrase.indexOf("]") + 1)
    ]
}
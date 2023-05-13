export const splitedPhrase = (phrase) => {
    return [
        phrase.slice(0, phrase.indexOf("[")),
        phrase.slice(phrase.indexOf("[") + 1, phrase.indexOf("]")),
        phrase.slice(phrase.indexOf("]") + 1)
    ]
}
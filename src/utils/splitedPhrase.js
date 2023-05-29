export const splitedPhrase = (phrase, review) => {
    return [
        (review ? "*" : "") + phrase.slice(0, phrase.indexOf("[")),
        phrase.slice(phrase.indexOf("[") + 1, phrase.indexOf("]")),
        phrase.slice(phrase.indexOf("]") + 1)
    ]
}
import { maxLevel, wordsQuantiy, wordsQuantiyPer100 } from '../config/algorithm'

export const generateWordFrequency = level => {
    let levelsSum = 0

    for (let index = 0; index < maxLevel; index++) {
        levelsSum += (maxLevel - Math.abs(level - index)) * wordsQuantiyPer100
    }

    const sortLevel = Math.floor(Math.random() * levelsSum)

    let currentLevel = 0
    let wordIndex
    let index = 0

    do {
        currentLevel += maxLevel - Math.abs(level - Math.floor(index / wordsQuantiyPer100));

        if (sortLevel < currentLevel) wordIndex = index

        index++
    } while (index < wordsQuantiy && sortLevel >= currentLevel)

    return wordIndex
}
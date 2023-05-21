const randomValueInInterval = () => (0.9 + Math.random() * 0.2)

export const spacedRepetition = (right, hits, next, previous) => {
    const minuteInMiliseconds = 1000 * 60
    const dayInMiliSeconds = 24 * 60 * 60 * 1000

    next = !next ? 0 : new Date(next).getTime()
    previous = !previous ? 0 : new Date(previous).getTime()

    if (hits === 0) {
        const milisecondsToAdd = randomValueInInterval() * (right ? dayInMiliSeconds : minuteInMiliseconds * 10)

        return new Date().getTime() + milisecondsToAdd
    }

    const milisecondsAdded = next - previous

    if (!right) {
        const milisecondsToAdd = randomValueInInterval() * milisecondsAdded

        return new Date().getTime() + milisecondsToAdd
    } 

    let milisecondsToAdd = 0

    switch (hits) {
        case 1:
            milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 7)
            break
        case 2:
            milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 30)
            break
        case 3:
            milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 90)
            break
        case 4:
            milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 180)
            break;
        default:
            milisecondsToAdd = randomValueInInterval() * (milisecondsAdded * 2)
    }

    return new Date().getTime() + milisecondsToAdd
}
const randomValueInInterval = () => (0.9 + Math.random() * 0.2)

export const spacedRepetition = (right, hits, next, previous) => {
    const minuteInMiliseconds = 1000 * 60;
    const dayInMiliSeconds = 24 * 60 * 60 * 1000;

    let milisecondsAdded;
    let milisecondsToAdd;

    if(!next) {
        next = 0;
    } else {
        next = new Date(next).getTime();
    }
    if(!previous) {
        previous = 0;
    } else {
        previous = new Date(previous).getTime();
    }

    if (hits == 0) {
        if (right) {
            // adicione 1 dia no wordsWord[index].nextRepetition
            milisecondsToAdd = randomValueInInterval() * dayInMiliSeconds;
        } else {
            // adicione 10 minutos no wordsWord[index].nextRepetition
            milisecondsToAdd = randomValueInInterval() * (minuteInMiliseconds * 10);
        }
    } else {
        milisecondsAdded = next - previous;

        if (right) {
            // adiciona uma quantidade de milisegundos de acordo com a quantidade de acertos
            if (hits == 1) {
                milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 7);
            } else if (hits == 2) {
                milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 30);
            } else if (hits == 3) {
                milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 90);
            } else if (hits == 4) {
                milisecondsToAdd = randomValueInInterval() * (dayInMiliSeconds * 180);
            } else {
                milisecondsToAdd = randomValueInInterval() * (milisecondsAdded * 2);
            }
        } else {
            // adiciona a mesma quantidade de milisegundos de antes
            milisecondsToAdd = randomValueInInterval() * milisecondsAdded;
        }
    }

    console.log("Miliseconds: " + milisecondsAdded);
    return { next_repetition: new Date().getTime() + milisecondsToAdd }
}
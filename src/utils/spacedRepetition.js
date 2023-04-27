export const spacedRepetition = (right, hits, next, previous) => {
    let date = new Date();
    let currentTime = date.getTime();

    // let secondInMiliseconds = 1000;
    let minuteInMiliseconds = 100; // 60 * 1000
    // let hourInMiliseconds = 60 * 60 * 1000;
    let dayInMiliSeconds = 24 * 1000; // 24 * 60 * 60 * 1000

    let milisecondsAdded;
    let milisecondsToAdd;

    if (hits == 0) {
        if (right) {
            // adicione 1 dia no wordsWord[index].nextRepetition
            milisecondsToAdd = (0.9 + Math.random() * 0.2) * dayInMiliSeconds;
            hits += 1;
        } else {
            // adicione 10 minutos no wordsWord[index].nextRepetition
            milisecondsToAdd = (0.9 + Math.random() * 0.2) * (minuteInMiliseconds * 10);
        }
    } else {
        milisecondsAdded = next - previous;

        if (right) {
            // adiciona uma quantidade de milisegundos de acordo com a quantidade de acertos
            if (hits == 1) {
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 7);
            } else if (hits == 2) {
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 30);
            } else if (hits == 3) {
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 90);
            } else if (hits == 4) {
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (dayInMiliSeconds * 180);
            } else {
                milisecondsToAdd = (0.9 + Math.random() * 0.2) * (milisecondsAdded * 2);
            }
            hits += 1;
        } else {
            // adiciona a mesma quantidade de milisegundos de antes
            milisecondsToAdd = (0.9 + Math.random() * 0.2) * milisecondsAdded;
        }
    }

    previous = currentTime;
    next = currentTime + milisecondsToAdd;

    return {
        hits, 
        next, 
        previous
    }
}
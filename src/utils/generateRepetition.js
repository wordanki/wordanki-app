export function generateRepetition(words) {
    let d = new Date();
    let time = d.getTime();

    let minTimeRepetition = time;
    let wordToRepeat = -1;
    for (let i = 0; i < 10; i++) {
        if (words[i].nextRepetition != 0 && words[i].nextRepetition < time && words[i].nextRepetition < minTimeRepetition) {
            minTimeRepetition = words[i].nextRepetition;
            wordToRepeat = i;
        }
    }

    return wordToRepeat;
}
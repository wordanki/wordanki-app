
export function generateIndexWord(level, words) {
    let somatorio = 0;
    let maximo = 100;

    for (let i = 0; i < 100; i++) {
        somatorio += (maximo - Math.abs(level - i)) * 50;
    }

    let sort = Math.floor(Math.random() * somatorio);

    let current = 0;
    let wordIndex;

    let i = 0;
    do {
        current += maximo - Math.abs(level - Math.floor(i / 50));

        if (sort < current) {
            wordIndex = i;
        }
        i++;
    } while (i < 5000 && sort >= current);

    while (words[Math.floor(wordIndex / 500)].nextRepetition != 0) {
        if (wordIndex == 4999)
            wordIndex = 0;
        else
            wordIndex++;
    }

    return Math.floor(wordIndex / 500);
}
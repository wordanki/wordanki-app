const wordClasses = [
    'adjetivo',
    'advérbio',
    'artigo',
    'conjunção',
    'interjeição',
    'numeral',
    'preposição',
    'pronome',
    'substantivo',
    'verbo'
]

export const wordClassIndex = wordClass => {
    return wordClasses.findIndex(item => wordClass === item)
}
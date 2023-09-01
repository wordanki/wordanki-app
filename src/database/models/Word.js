import { openDatabase } from "../connection"

import { TABLE_NAME as PHRASE_TABLE_NAME } from './Phrase'

export const TABLE_NAME = 'words'
class Word {
    constructor() {
        this.db = openDatabase()
    }

    async update(id, data) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `UPDATE ${TABLE_NAME} 
                    SET next_repetition=?, previous_repetition=?, hits=? WHERE id=?;`,
                    [data.next_repetition, data.previous_repetition, data.hits, id],
                    (_, { rowsAffected }) => {
                        if (rowsAffected > 0) return resolve(rowsAffected)

                        reject("Error updating data: id=" + id);
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findById(id) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `SELECT * FROM ${TABLE_NAME} WHERE id=?;`,
                    [id],
                    (_, { rows }) => {
                        if (rows.length > 0) return resolve(rows._array[0])

                        reject("Obj not found: id=" + id);
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findAll() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT 
                        ${TABLE_NAME}.id as word_id,
                        ${TABLE_NAME}.content as word_content,
                        ${TABLE_NAME}.translated_content as word_translated_content,
                        ${TABLE_NAME}.class as word_class,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.content as phrase_content,
                        ${PHRASE_TABLE_NAME}.translated_content as phrase_translated_content
                    FROM ${TABLE_NAME} 
                    LEFT JOIN ${PHRASE_TABLE_NAME} 
                    ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id;`,
                    [],
                    (_, { rows: { _array } }) => {
                        const rows = []

                        _array.forEach(item => {
                            const index = rows.findIndex(word => word.find(wordItem => wordItem.word_id === item.word_id))

                            if (index === -1) {
                                rows.push([item])

                                return
                            }

                            rows[index].push(item)
                        })

                        const rowsFormatted = rows.map(row => ({
                            content: row[0].word_content,
                            translated_content: row[0].word_translated_content,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                content: item.phrase_content,
                                translated_content: item.phrase_translated_content
                            }))
                        }))

                        resolve(rowsFormatted)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findOneByFrequencyOrBefore(frequency) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT 
                        ${TABLE_NAME}.id as word_id,
                        ${TABLE_NAME}.content as word_content,
                        ${TABLE_NAME}.translated_content as word_translated_content,
                        ${TABLE_NAME}.class as word_class,
                        ${TABLE_NAME}.next_repetition as word_next_repetition,
                        ${TABLE_NAME}.previous_repetition as word_previous_repetition,
                        ${TABLE_NAME}.hits as word_hits,
                        ${TABLE_NAME}.frequency as word_frequency,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.content as phrase_content,
                        ${PHRASE_TABLE_NAME}.translated_content as phrase_translated_content
                    FROM ${TABLE_NAME} 
                    LEFT JOIN ${PHRASE_TABLE_NAME} 
                    ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id
                    WHERE ${TABLE_NAME}.next_repetition IS NULL
                    AND ${TABLE_NAME}.frequency < '${frequency}'
                    ORDER BY ${TABLE_NAME}.frequency DESC LIMIT 1;`,
                    [],
                    (_, { rows: { _array } }) => {
                        const rows = []

                        _array.forEach(item => {
                            const index = rows.findIndex(word => word.find(wordItem => wordItem.word_id === item.word_id))

                            if (index === -1) {
                                rows.push([item])

                                return
                            }

                            rows[index].push(item)
                        })

                        const rowsFormatted = rows.map(row => ({
                            id: row[0].word_id,
                            hits: row[0].word_hits,
                            content: row[0].word_content,
                            translated_content: row[0].word_translated_content,
                            frequency: row[0].word_frequency,
                            next_repetition: row[0].word_next_repetition,
                            previous_repetition: row[0].word_previous_repetition,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                content: item.phrase_content,
                                translated_content: item.phrase_translated_content
                            }))
                        }))

                        resolve(rowsFormatted[0])
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findOneByFrequencyOrNext(frequency) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT 
                        ${TABLE_NAME}.id as word_id,
                        ${TABLE_NAME}.content as word_content,
                        ${TABLE_NAME}.translated_content as word_translated_content,
                        ${TABLE_NAME}.class as word_class,
                        ${TABLE_NAME}.next_repetition as word_next_repetition,
                        ${TABLE_NAME}.previous_repetition as word_previous_repetition,
                        ${TABLE_NAME}.hits as word_hits,
                        ${TABLE_NAME}.frequency as word_frequency,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.content as phrase_content,
                        ${PHRASE_TABLE_NAME}.translated_content as phrase_translated_content
                    FROM ${TABLE_NAME} 
                    LEFT JOIN ${PHRASE_TABLE_NAME} 
                    ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id
                    WHERE ${TABLE_NAME}.next_repetition IS NULL
                    AND ${TABLE_NAME}.frequency >= '${frequency}'
                    ORDER BY ${TABLE_NAME}.frequency ASC LIMIT 1;`,
                    [],
                    (_, { rows: { _array } }) => {
                        const rows = []

                        _array.forEach(item => {
                            const index = rows.findIndex(word => word.find(wordItem => wordItem.word_id === item.word_id))

                            if (index === -1) {
                                rows.push([item])

                                return
                            }

                            rows[index].push(item)
                        })

                        const rowsFormatted = rows.map(row => ({
                            id: row[0].word_id,
                            hits: row[0].word_hits,
                            content: row[0].word_content,
                            translated_content: row[0].word_translated_content,
                            frequency: row[0].word_frequency,
                            next_repetition: row[0].word_next_repetition,
                            previous_repetition: row[0].word_previous_repetition,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                content: item.phrase_content,
                                translated_content: item.phrase_translated_content
                            }))
                        }))

                        resolve(rowsFormatted[0])
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findOneByNextReview() {
        return new Promise((resolve, reject) => {
            const currentTime = new Date().toISOString()

            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT 
                        ${TABLE_NAME}.id as word_id,
                        ${TABLE_NAME}.content as word_content,
                        ${TABLE_NAME}.translated_content as word_translated_content,
                        ${TABLE_NAME}.class as word_class,
                        ${TABLE_NAME}.next_repetition as word_next_repetition,
                        ${TABLE_NAME}.previous_repetition as word_previous_repetition,
                        ${TABLE_NAME}.hits as word_hits,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.content as phrase_content,
                        ${PHRASE_TABLE_NAME}.translated_content as phrase_translated_content
                    FROM ${TABLE_NAME} 
                    LEFT JOIN ${PHRASE_TABLE_NAME} 
                    ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id
                    WHERE ${TABLE_NAME}.next_repetition IS NOT NULL 
                    AND ${TABLE_NAME}.next_repetition < '${currentTime}'
                    ORDER BY ${TABLE_NAME}.next_repetition ASC LIMIT 1;`,
                    [],
                    (_, { rows: { _array } }) => {
                        const rows = []

                        _array.forEach(item => {
                            const index = rows.findIndex(word => word.find(wordItem => wordItem.word_id === item.word_id))

                            if (index === -1) {
                                rows.push([item])

                                return
                            }

                            rows[index].push(item)
                        })

                        const rowsFormatted = rows.map(row => ({
                            id: row[0].word_id,
                            hits: row[0].word_hits,
                            content: row[0].word_content,
                            translated_content: row[0].word_translated_content,
                            next_repetition: row[0].word_next_repetition,
                            previous_repetition: row[0].word_previous_repetition,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                content: item.phrase_content,
                                translated_content: item.phrase_translated_content
                            }))
                        }))

                        resolve(rowsFormatted[0])
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findByClassRandomlyAndDifferentOfTranslationWithLimit(classWord, translation, limit) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT * FROM ${TABLE_NAME}
                    WHERE ${TABLE_NAME}.class = '${classWord}' 
                    AND ${TABLE_NAME}.translated_content != '${translation}'
                    ORDER BY RANDOM() LIMIT ${limit};`,
                    [],
                    (_, { rows: { _array } }) => {
                        resolve(_array)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async getQuantity() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT COUNT(*) AS quantity FROM ${TABLE_NAME};`,
                    [],
                    (_, { rows: { _array: [{ quantity }] } }) => {

                        resolve(quantity)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async getNoSeenQuantity() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT COUNT(*) AS quantity FROM ${TABLE_NAME} 
                    WHERE ${TABLE_NAME}.next_repetition IS NOT NULL;`,
                    [],
                    (_, { rows: { _array: [{ quantity }] } }) => {

                        resolve(quantity)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async getReviewsQuantity() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                const currentTime = new Date().toISOString()

                tx.executeSql(
                    `SELECT COUNT(*) as quantity FROM ${TABLE_NAME} 
                    WHERE ${TABLE_NAME}.next_repetition < '${currentTime}'`,
                    [],
                    (_, { rows: { _array: [{ quantity }] } }) => {
                        resolve(quantity)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }
}

export default new Word()
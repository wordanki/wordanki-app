import { openDatabase } from "../connection";

import { TABLE_NAME as PHRASE_TABLE_NAME } from './Phrase'

export const TABLE_NAME = 'words'
class Word {
    constructor() {
        this.db = openDatabase()
    }

    async create(data) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${TABLE_NAME} (english, portuguese, class, frequency) values (?, ?, ?, ?);`,
                    [data.english, data.portuguese, data.class, data.frequency],
                    (_, { rowsAffected, insertId }) => {
                        if (rowsAffected > 0) return resolve(insertId)

                        reject("Error inserting data: " + JSON.stringify(data))

                    },
                    (_, error) => reject(error)
                )
            })
        })
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
                        ${TABLE_NAME}.english as word_english,
                        ${TABLE_NAME}.portuguese as word_portuguese,
                        ${TABLE_NAME}.class as word_class,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.english as phrase_english,
                        ${PHRASE_TABLE_NAME}.portuguese as phrase_portuguese
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
                            english: row[0].word_english,
                            portuguese: row[0].word_portuguese,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                english: item.phrase_english,
                                portuguese: item.phrase_portuguese
                            }))
                        }))

                        resolve(rowsFormatted)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findOneByNext() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT 
                        ${TABLE_NAME}.id as word_id,
                        ${TABLE_NAME}.english as word_english,
                        ${TABLE_NAME}.portuguese as word_portuguese,
                        ${TABLE_NAME}.class as word_class,
                        ${TABLE_NAME}.next_repetition as word_next_repetition,
                        ${TABLE_NAME}.previous_repetition as word_previous_repetition,
                        ${TABLE_NAME}.hits as word_hits,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.english as phrase_english,
                        ${PHRASE_TABLE_NAME}.portuguese as phrase_portuguese
                    FROM ${TABLE_NAME} 
                    LEFT JOIN ${PHRASE_TABLE_NAME} 
                    ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id
                    WHERE ${TABLE_NAME}.next_repetition IS NULL 
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
                            english: row[0].word_english,
                            portuguese: row[0].word_portuguese,
                            next_repetition: row[0].word_next_repetition,
                            previous_repetition: row[0].word_previous_repetition,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                english: item.phrase_english,
                                portuguese: item.phrase_portuguese
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
                        ${TABLE_NAME}.english as word_english,
                        ${TABLE_NAME}.portuguese as word_portuguese,
                        ${TABLE_NAME}.class as word_class,
                        ${TABLE_NAME}.next_repetition as word_next_repetition,
                        ${TABLE_NAME}.previous_repetition as word_previous_repetition,
                        ${TABLE_NAME}.hits as word_hits,
                        ${PHRASE_TABLE_NAME}.id as phrase_id,
                        ${PHRASE_TABLE_NAME}.english as phrase_english,
                        ${PHRASE_TABLE_NAME}.portuguese as phrase_portuguese
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
                            english: row[0].word_english,
                            portuguese: row[0].word_portuguese,
                            next_repetition: row[0].word_next_repetition,
                            previous_repetition: row[0].word_previous_repetition,
                            class: row[0].word_class,
                            phrases: row.map(item => ({
                                english: item.phrase_english,
                                portuguese: item.phrase_portuguese
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
                    AND ${TABLE_NAME}.portuguese != '${translation}'
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

    async remove(id) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `DELETE FROM ${TABLE_NAME} WHERE id=?;`,
                    [id],
                    (_, { rowsAffected }) => resolve(rowsAffected),
                    (_, error) => reject(error)
                )
            })
        })
    }
}

export default new Word()
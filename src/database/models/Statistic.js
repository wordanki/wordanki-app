import { openDatabase } from "../connection"

import { TABLE_NAME as WORD_TABLE_NAME } from '../models/Word'

export const TABLE_NAME = 'statistics'

class Statistics {
    constructor() {
        this.db = openDatabase()
    }

    async create(data) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${TABLE_NAME} (datest, type, word_id) values (?, ?, ?);`,
                    [data.datest, data.type, data.word_id],
                    (_, { rowsAffected, insertId }) => {
                        if (rowsAffected > 0)  return resolve(insertId)

                        reject("Error inserting data: " + JSON.stringify(data))
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async getQuantityByType(language, type) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT COUNT(*) AS quantity FROM ${TABLE_NAME} 
                    LEFT JOIN ${WORD_TABLE_NAME} 
                    ON ${TABLE_NAME}.word_id = ${WORD_TABLE_NAME}.id
                    WHERE ${TABLE_NAME}.type = '${type}'
                    AND ${WORD_TABLE_NAME}.language_id = '${language}';`,
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

export default new Statistics()
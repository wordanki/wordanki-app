import { openDatabase } from "../connection"

export const TABLE_NAME = 'languages'

class Language {
    constructor() {
        this.db = openDatabase()
    }

    async updateLevelById(id, level) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `UPDATE ${TABLE_NAME} SET level=?
                    WHERE ${TABLE_NAME}.id = '${id}';`,
                    [level],
                    (_, { rowsAffected }) => {
                        if (rowsAffected > 0) return resolve(rowsAffected)

                        reject("Error updating data: id=" + id);
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async updateStartedDateById(id, date) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `UPDATE ${TABLE_NAME} SET started_date=?
                    WHERE ${TABLE_NAME}.id = '${id}';`,
                    [date],
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
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT * FROM ${TABLE_NAME} WHERE id = '${id}';`,
                    [],
                    (_, { rows }) => {
                        resolve(rows._array[0])
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }
}

export default new Language()
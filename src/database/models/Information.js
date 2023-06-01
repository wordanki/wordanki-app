import { openDatabase } from "../connection"

export const TABLE_NAME = 'informations'

class Information {
    constructor() {
        this.db = openDatabase()
    }

    async update(id, data) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `UPDATE ${TABLE_NAME} SET english=?, portuguese=?, word_id=? WHERE id=?;`,
                    [data.english, data.portuguese, data.word_id, id],
                    (_, { rowsAffected }) => {
                        if (rowsAffected > 0) return resolve(rowsAffected)

                        reject("Error updating data: id=" + id);
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async findTheOne() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT * FROM ${TABLE_NAME};`,
                    [],
                    (_, { rows }) => {
                        resolve(rows._array)
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }
}

export default new Information()
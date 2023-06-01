import { openDatabase } from "../connection"

export const TABLE_NAME = 'informations'

class Information {
    constructor() {
        this.db = openDatabase()
    }

    async updateLevel(level) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `UPDATE ${TABLE_NAME} SET level=?;`,
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

    async findTheOne() {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT * FROM ${TABLE_NAME};`,
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

export default new Information()
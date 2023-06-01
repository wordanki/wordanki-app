import { openDatabase } from "../connection"

export const TABLE_NAME = 'phrases'

class Phrase {
    constructor() {
        this.db = openDatabase()
    }

    async create(data) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${TABLE_NAME} (english, portuguese, word_id) values (?, ?, ?);`,
                    [data.english, data.portuguese, data.word_id],
                    (_, { rowsAffected, insertId }) => {
                        if (rowsAffected > 0)  return resolve(insertId)

                        reject("Error inserting data: " + JSON.stringify(data))
                    },
                    (_, error) => reject(error)
                )
            })
        })
    }

    async delete(data) {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(
                    `DELETE FROM ${TABLE_NAME};`,
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

export default new Phrase()
import db from "../connection";

// import { TABLE_NAME as WORD_TABLE_NAME } from './Word'

const WORD_TABLE_NAME = 'words'
export const TABLE_NAME = 'phrases'

db.transaction(tx => {
    // tx.executeSql(`DROP TABLE ${TABLE_NAME};`)

    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            english varchar(255), 
            portuguese varchar(255),
            word_id INT,
            FOREIGN KEY(word_id) REFERENCES ${WORD_TABLE_NAME}(id)
        );`
    )
})

export default {
    create: data => new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO ${TABLE_NAME} (english, portuguese, word_id) values (?, ?, ?);`,
                [data.english, data.portuguese, data.word_id],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) return resolve(insertId)
    
                    reject("Error inserting data: " + JSON.stringify(data))
                },
                (_, error) => reject(error) 
            )
        })
    }),
    update: (id, data) => new Promise((resolve, reject) => {
        db.transaction(tx => {
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
    }),
    findById: id => new Promise((resolve, reject) => {
        db.transaction(tx => {
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
    }),
    findAll: () => new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${TABLE_NAME};`,
                [],
                (_, { rows }) => resolve(rows._array),
                (_, error) => reject(error) 
            )
        })
    }),
    remove: id => new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM ${TABLE_NAME} WHERE id=?;`,
                [id],
                (_, { rowsAffected }) => resolve(rowsAffected),
                (_, error) => reject(error)
            )
        })
    })
}
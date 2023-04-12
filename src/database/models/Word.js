import db from "../connection";

// import { TABLE_NAME as PHRASE_TABLE_NAME } from './Phrase'

const PHRASE_TABLE_NAME = 'phrases'
export const TABLE_NAME = 'words'

db.transaction(tx => {
    console.log("TEST")
    // tx.executeSql(`DROP TABLE ${TABLE_NAME};`)

    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            english varchar(255), 
            portuguese varchar(255)
        );`
    )
})

export default {
    create: data => new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO ${TABLE_NAME} (english, portuguese) values (?, ?);`,
                [data.english, data.portuguese],
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
                `UPDATE ${TABLE_NAME} SET english=?, portuguese=? WHERE id=?;`,
                [data.english, data.portuguese, id],
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
                `SELECT 
                    ${TABLE_NAME}.id as word_id,
                    ${TABLE_NAME}.english as word_english,
                    ${TABLE_NAME}.portuguese as word_portuguese,
                    ${PHRASE_TABLE_NAME}.id as phrase_id,
                    ${PHRASE_TABLE_NAME}.english as phrase_english,
                    ${PHRASE_TABLE_NAME}.portuguese as phrase_portuguese
                FROM ${TABLE_NAME} 
                LEFT JOIN ${PHRASE_TABLE_NAME} 
                ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id;`,
                [],
                (_, { rows: { _array } }) => {
                    console.log("VAGA")
                    // const rows = []

                    // _array.forEach(item => {
                    //   const index = rows.findIndex(word => word.find(wordItem => wordItem.id === item.id))
                
                    //   if (index === -1) {
                    //     rows.push([item])
                
                    //     return
                    //   }
                
                    //   rows[index].push(item)
                    // })
                
                    // const rowsFormatted = rows.map(row => ({
                    //     english: row[0].word_english,
                    //     portuguese: row[0].word_portuguese,
                    //     phrases:  row.map(item => ({
                    //         english: item.phrase_english,
                    //         portuguese: item.phrase_portuguese
                    //     }))
                    // }))
                    
                    // resolve(rowsFormatted)
                    resolve([])
                },
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
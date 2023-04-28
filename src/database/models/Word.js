import db from "../connection";

// import { TABLE_NAME as PHRASE_TABLE_NAME } from './Phrase'

const PHRASE_TABLE_NAME = 'phrases'
export const TABLE_NAME = 'words'

db.transaction(tx => {
    // tx.executeSql(`DROP TABLE ${TABLE_NAME};`)

    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            english varchar(255) NOT NULL, 
            portuguese varchar(255) NOT NULL,
            next_repetition DATETIME,
            previous_repetition DATETIME,
            hits int NOT NULL DEFAULT 0,
            class int NOT NULL
        );`
    )
})

export default {
    create: data => new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO ${TABLE_NAME} (english, portuguese, class) values (?, ?, ?);`,
                [data.english, data.portuguese, data.class],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) return resolve(insertId)
    
                    reject("Error inserting data: " + JSON.stringify(data))
                },
                (_, error) => reject(error) 
            )
        })
    }),
    update: (id, data) => new Promise((resolve, reject) => {
        console.log(data)
        db.transaction(tx => {
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
                        phrases:  row.map(item => ({
                            english: item.phrase_english,
                            portuguese: item.phrase_portuguese
                        }))
                    }))
                    
                    resolve(rowsFormatted)
                },
                (_, error) => reject(error) 
            )
        })
    }),
    findOneByNextReview: () => new Promise((resolve, reject) => {
        db.transaction((tx) => {
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
                        phrases:  row.map(item => ({
                            english: item.phrase_english,
                            portuguese: item.phrase_portuguese
                        }))
                    }))
                    
                    resolve(rowsFormatted[0])
                },
                (_, error) => reject(error) 
            )
        })
    }),
    findByClassRandomlyWithLimit: (classWord, limit) => new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${TABLE_NAME}
                WHERE ${TABLE_NAME}.class = '${classWord}' 
                ORDER BY RANDOM() LIMIT ${limit};`,
                [],
                (_, { rows: { _array } }) => {
                    resolve(_array)
                },
                (_, error) => reject(error) 
            )
        })
    }),
    findOne: () => new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${TABLE_NAME} 
                WHERE ${TABLE_NAME}.next_repetition IS NOT NULL 
                AND ${TABLE_NAME}.next_repetition < CURRENT_TIMESTAMP
                ORDER BY ${TABLE_NAME}.next_repetition ASC LIMIT 1`,
                [],
                (_, { rows: { _array } }) => {
                    resolve(_array[0])
                },
                (_, error) => reject(error) 
            )
        })
    }),
    finddd: () => new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${TABLE_NAME} 
                WHERE ${TABLE_NAME}.next_repetition IS NULL 
                LIMIT 1`,
                [],
                (_, { rows: { _array } }) => {
                    resolve(_array[0])
                },
                (_, error) => reject(error) 
            )
        })
    }),
    getQuantity: () => new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT COUNT(*) AS quantity FROM ${TABLE_NAME};`,
                [],
                (_, { rows: { _array: [{ quantity }] } }) => {
 
                    resolve(quantity)
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
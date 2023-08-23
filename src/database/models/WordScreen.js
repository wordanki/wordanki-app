import { openDatabase } from "../connection"

import { TABLE_NAME as PHRASE_TABLE_NAME } from './Phrase'

export const TABLE_NAME = 'words'
class Word {
    constructor() {
        this.db = openDatabase()
    }

    async loadWords(page) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT 
                        ${TABLE_NAME}.frequency as word_frequency,
                        ${TABLE_NAME}.english as word_english,
                        ${TABLE_NAME}.portuguese as word_portuguese,
                        ${TABLE_NAME}.class as word_class,
                        ${PHRASE_TABLE_NAME}.english as phrase_english,
                        ${PHRASE_TABLE_NAME}.portuguese as phrase_portuguese
                    FROM ${TABLE_NAME} 
                    LEFT JOIN ${PHRASE_TABLE_NAME} 
                    ON ${PHRASE_TABLE_NAME}.word_id = ${TABLE_NAME}.id
                    WHERE ${TABLE_NAME}.frequency >= ${page*30} AND ${TABLE_NAME}.frequency < ${(page+1) * 30};`,
                    [],
                    (_, { rows: { _array } }) => {
                        resolve(_array);
                    },
                    (_, error) => reject(error)
                );
            });
        });
    }
}

export default new Word()
import sql from './db.js'

// sql`
// DROP TABLE videos;
// `.then(() => {
//     console.log('Table dropped successfully')
// }).catch((err) => {
//     console.error('Error dropping table', err)
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`.then(() => {
    console.log('Table created successfully')
}).catch((err) => {
    console.error('Error creating table', err)
})

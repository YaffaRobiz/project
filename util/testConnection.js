const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'memore_user',
    database: 'memore',
    password: 'Aa123456'
});

// Execute a test query
pool.query('SELECT 1', (err, results) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connection to database successful!');
    // Optionally, you can log the results of the test query
    console.log('Test query result:', results);
});
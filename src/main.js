// Import the pg library
const { Client } = require('pg');

// Create a new client instance and configure the connection parameters
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432, // default PostgreSQL port
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });

// Query the database
// client.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Query error', err.stack);
//   } else {
//     console.log('Query result', res.rows);
//   }

//   // Close the client connection
//   client.end()
//     .then(() => {
//       console.log('Client disconnected');
//     })
//     .catch(err => {
//       console.error('Disconnection error', err.stack);
//     });
// });

client.query('SELECT * from person', (err, res) => {
  if (err) {
    console.error('Query error', err.stack);
  } else {
    console.log('Query result', res.rows);
  }

  // Close the client connection
  client.end()
    .then(() => {
      console.log('Client disconnected');
    })
    .catch(err => {
      console.error('Disconnection error', err.stack);
    });
});
// Load HTTP module
const http = require('http');// thư viên này đã được cài khi tải nodejs 

// Set hostname and port
const hostname = 'localhost'; // localhost
const port = 8000;

// Create HTTP server and handle requests
const server = http.createServer((req, res) => {
  // Set response HTTP header with status and Content-Type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n i am phuocphuoc');
});

// Listen for requests on port 3000 and log the port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
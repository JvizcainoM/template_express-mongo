require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');

const { initSocket } = require('./config/socket');
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use('/api/1.0', require('./app/routes'));

const server = http.createServer(app);
const io = require('socket.io')(server);

initSocket(io);

dbConnect();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
});
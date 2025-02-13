const express = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// WebSocket Server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Broadcast message to all clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => console.log('Client disconnected'));
});

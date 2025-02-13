const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 9000, path: '/' });

console.log('PeerJS server running on ws://localhost:9000');

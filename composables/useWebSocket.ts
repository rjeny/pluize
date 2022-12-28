import { io } from 'socket.io-client';
import { QUIZ_ROOM } from '../constants/ws';

export function useWebSocket (type: QUIZ_ROOM) {
    const socket = io({
        autoConnect: false
      });

    if (process.client) {
        socket.connect();
    }

    return socket;
}
import { Server } from 'socket.io';
import { QUIZ_ROOM } from '../constants/ws';

export const WsServer = new Server();
export const quizWS = WsServer.of(QUIZ_ROOM.QUIZ);
export const adminWS = WsServer.of(QUIZ_ROOM.ADMIN);
export const orgWS = WsServer.of(QUIZ_ROOM.ORG);
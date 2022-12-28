import { App } from 'uWebSockets.js';
import { defineNuxtModule } from '@nuxt/kit';
import { WsServer, quizWS } from '../utils/websocket';

export default defineNuxtModule({
    setup(opts, nuxt) {
        nuxt.hook('ready', () => {
            const app = App();
            WsServer.attachApp(app);
            WsServer.listen(3005);

            quizWS.on("connection", socket => {
            })
        });

        nuxt.hook('close', () => {
            WsServer.close();
        })
    },
})
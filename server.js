import { handler } from './build/handler.js';
import express from 'express';
import ipxServer from './ipxServer.js'

const app = express();

// パスの先頭が/_ipxの場合にIPXの処理を行うようにします。
app.use('/_ipx', ipxServer);

app.use(handler);

app.listen(3000, () => {
	console.log('listening on port 3000');
});

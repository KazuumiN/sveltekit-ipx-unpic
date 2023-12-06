import { createIPX, ipxHttpStorage, createIPXNodeServer } from 'ipx';

// 今回は例にpicsum.photosを使っていますが、実際には自分が提供する画像のホストを指定します。
const imageHost = "picsum.photos";
const storage = ipxHttpStorage({
	domains: [imageHost]
});

const ipx = createIPX({
  storage,
	httpStorage: storage,
	alias: {
		'/image': `https://${imageHost}`
	},
});

export default createIPXNodeServer(ipx);
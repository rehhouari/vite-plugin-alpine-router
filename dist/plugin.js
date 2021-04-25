import fs from 'fs';
import 'vite/hmr';
export default (config = { selector: '#content' }) => {
    return {
        name: 'vite:alpine-router',
        handleHotUpdate({ file, server }) {
            let parts = file.split('/');
            let dir = parts[parts.length - 2];
            if (dir == 'views') {
                server.ws.send({
                    type: 'custom',
                    event: 'reloadview',
                    data: { file: parts[parts.length - 1] },
                });
            }
            return [];
        },
        transformIndexHtml(html) {
            if (import.meta.hot) {
                import.meta.hot.on('reloadview', (data) => {
                    let doc = new DOMParser().parseFromString(html, 'text/html');
                    fs.readFile(data.file, 'utf8', (err, content) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        let c = doc.querySelector(config.selector);
                        if (c != null) {
                            c.innerHTML = content;
                        }
                    });
                    return doc.documentElement.innerHTML;
                });
            }
        },
    };
};
//# sourceMappingURL=plugin.js.map
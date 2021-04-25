export default (config = {}) => {
    return {
        name: 'vite:alpine-router',
        handleHotUpdate({ file, server, read }) {
            let parts = file.split('/');
            let dir = parts[parts.length - 2];
            if (dir == 'views') {
                server.ws.send({
                    type: 'full-reload',
                });
            }
            return [];
        },
    };
};
//# sourceMappingURL=plugin.js.map
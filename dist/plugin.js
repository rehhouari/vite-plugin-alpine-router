"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config = {}) => {
    return {
        name: 'vite:alpine-router',
        handleHotUpdate({ file, server }) {
            let parts = file.split('/');
            let dir = parts[parts.length - 2];
            if (dir == 'views') {
                server.ws.send({
                    type: 'update',
                });
            }
            return [];
        },
    };
};
//# sourceMappingURL=plugin.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config = {}) => {
    return {
        name: 'vite:alpine-router',
        handleHotUpdate({ file }) {
            console.log(file);
            return [];
        },
    };
};
//# sourceMappingURL=plugin.js.map
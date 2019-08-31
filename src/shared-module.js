
const obj = {};

const getGlobal = () => {
    if (window.location.href.indexOf("useWindow") !== -1) {
        return window;
    }
    return obj;
}

export const incrementAndGetValue = () => {
    const global = getGlobal();
    global.count = global.count || 0;
    global.count += 1;
    return global.count;
}
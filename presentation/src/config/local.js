const local = window.localStorage;

const getItem = (key) => {
    return local.getItem(key);
}

const setItem = (key, value) => {
    local.setItem(key, value);
}

module.exports = {
    getItem,
    setItem
}
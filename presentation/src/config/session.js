const session = window.sessionStorage;

const setItem = (key, value) => {
    session.setItem(key, value);
}

const getItem = (key) => {
    return session.getItem(key);
}

module.exports = {
    setItem,
    getItem
}
function getNestedValue(obj, path) {
    let keys = path.split(".");

    let current = obj;

    for (let key of keys) {
        if (current === undefined) {
            return undefined;
        }

        current = current[key];
    }

    return current;
}

module.exports = getNestedValue;
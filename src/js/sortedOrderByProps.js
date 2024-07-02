export default function orderByProps(obj, sortOrderProperties) {
    const listSortPropertyOrder = sortOrderProperties.filter((property) => Object.prototype.hasOwnProperty.call(obj, property)).map((property) => ({ key: property, value: obj[property] }));

    const listDifferentProperties = [];

    for (const prop in obj) {
        if (!sortOrderProperties.includes(prop)) {
            listDifferentProperties.push({ key: prop, value: obj[prop] });
        }
    }

    listDifferentProperties.sort((a, b) => a.key.localeCompare(b.key));

    return [...listSortPropertyOrder, ...listDifferentProperties];
}

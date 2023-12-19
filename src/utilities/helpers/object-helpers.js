export const updateObjectInArray = (items, itemID, propName, newProps) => {
    return items.map(item => {
        if (item[propName] === itemID) {
            return {...item, ...newProps}
        }
        return item;
    })
}


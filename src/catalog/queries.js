export const hasProduct = (catalog, productId) => {
    return productId in catalog;
};

export const getProduct = (catalog, productId) => {
    if (productId in catalog) {
        return { ...catalog[productId] };
    }
    return null;
};

export const listProducts = (catalog) => {
    const result = [];
    for (const id in catalog) {
        result.push({ ...catalog[id] });
    }
    return result;
};

export const filterByCategory = (catalog, categoryName) => {
    const result = [];
    for (const id in catalog) {
        if (catalog[id].category && catalog[id].category.main === categoryName) {
            result.push({ ...catalog[id] });
        }
    }
    return result;
};

export const searchByName = (catalog, query) => {
    const q = query.toLowerCase();
    const result = [];
    for (const id in catalog) {
        if (catalog[id].name.toLowerCase().includes(q)) {
            result.push({ ...catalog[id] });
        }
    }
    return result;
} 
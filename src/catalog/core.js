export const addProduct = (catalog, product) => {
    if (product.id in catalog) {
        return catalog;
    } 
    return {
        ...catalog,
        [product.id]: product
    }
}

export const removeProduct = (catalog, productId) => {
    const result = {};

    for (const id in catalog) {
        if (id !== productId) {
            result[id] = catalog[id];
        }
    }
    return result;
};

export const updateProduct = (catalog, productId, updates) => {
      if (!productId in catalog) {
        return catalog;
      }
      return {
        ...catalog,
        [productId]: {
          ...catalog[productId],
          ...updates
        }
      }
};

export const mergeCatalogs = (c1, c2) => {
    return { ...c1, ...c2 };
};

export const cloneCatalog = (catalog) => {
    const cloned = {};
    for (const id in catalog) {
        const product = catalog[id];
        cloned[id] = {
            ...product,
            category: { ...product.category }
        };
    }
    return cloned;
};
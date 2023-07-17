import { $host } from ".";

export const createProduct = async (Product) => {
    const { data } = await $host.post('api/products/create', Product,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data;"
            }
        })
    return data
}

export const fetchAllProducts = async (brandId, page, limit = 6) => {
    const response = await $host.get('api/products/getAll', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }, params: {
            BrandName: brandId,
            page,
            limit
        }
    })
    return response.data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/products/getOne/' + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}

export const fetchBrand = async () => {
    const { data } = await $host.get('api/brand/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}
export const createBrand = async (BrandName) => {
    const { data } = await $host.post('api/brand/create', { BrandName }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}

export const deleteBrand = async (BrandId) => {
    const { data } = await $host.delete('api/brand/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            BrandId
        }
    })
    return data
}

export const updateBrand = async (BrandId, BrandName) => {
    const { data } = await $host.patch('api/brand/update', {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}

export const fetchSuppliers = async () => {
    const { data } = await $host.get('api/suppliers/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}

export const createSuppliers = async (Name, LastName, OrganizationName) => {
    const { data } = await $host.post('api/suppliers/create', { Name, LastName, OrganizationName }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}

export const deleteSuppliers = async (SupplierId) => {
    const { data } = await $host.delete('api/suppliers/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            SupplierId
        }
    })
    return data
}

export const updateSuppliers = async (SupplierId, Name, LastName, OrganizationName) => {
    const { data } = await $host.patch('api/suppliers/update', { SupplierId, Name, LastName, OrganizationName }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}

export const deleteProduct = async (ProductId, img) => {
    const { data } = await $host.delete('api/products/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            ProductId, img
        }
    })
    console.log(data)
    return data
}
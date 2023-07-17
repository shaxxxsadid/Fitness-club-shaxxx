import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._suppliers = []
        this._brands = []
        this._produts = []
        this._page = 1
        this._totalCountPage = 0
        this._limitPage = 6
        this._selectedBrand = {}
        this._isLoading = false
        makeAutoObservable(this)
    }

    setLoading(isLoading) {
        this._isLoading = isLoading
    }

    setSuppliers(suppliers) {
        this._suppliers = suppliers
    }

    setBrands(brands) {
        this.setPages(1)
        this._brands = brands
    }

    setProducts(products) {
        this._produts = products
    }

    setPages(pages) {
        this._page = pages
    }

    setTotalCountPages(totalCountPages) {
        this._totalCountPage = totalCountPages
    }

    setSelectedBrand(selectedBrand) {
        this._selectedBrand = selectedBrand
    }

    get isLoading() {
        return this._isLoading
    }

    get suppliers() {
        return this._suppliers
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._produts
    }

    get pages() {
        return this._page
    }

    get totalCountPages() {
        return this._totalCountPage
    }

    get limitPages() {
        return this._limitPage
    }

    get selectedBrand() {
        return this._selectedBrand
    }

}
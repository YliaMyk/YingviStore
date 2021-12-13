import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._categories = []
        this._masters = []
        this._products = []
        this._selectedType = {}
        this._selectedMaster = {}
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._basked = [
            {
                "id": 5,
                "userId": 2,
                "productId": 1
            },
            {
                "id": 6,
                "userId": 2,
                "productId": 13
            },
            {
                "id": 7,
                "userId": 2,
                "productId": 14
            },
            {
                "id": 11,
                "userId": 2,
                "productId": 15
            }
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setMasters(masters) {
        this._masters = masters
    }
    setProducts(products) {
        this._products = products
    }
    setCategories(categories) {
        this._categories = categories
    }
    setBasked(basked) {
        this._basked = basked
    }

    setSelectedMaster(masters) {
        this.setPage(1)
        this._selectedMaster = masters
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedCategory(categories) {
        this.setPage(1)
        this._selectedCategory = categories
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get categories() {
        return this._categories
    }
    get masters() {
        return this._masters
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedMaster() {
        return this._selectedMaster
    }
    get selectedCategory() {
        return this._selectedCategory
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get basked() {
        return this._basked
    }

}
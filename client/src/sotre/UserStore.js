import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._users = []
        this._user = {}
        this._userToken = [
        ]
        this._employees = []
        this._positions = []
        this._clubCards = []
        this._cardTriffs = {}
        this._token = ""
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setToken(token) {
        this._token = token
    }

    setUserToken(userToken) {
        this._userToken = userToken
    }

    setUsers(users) {
        this._users = users
    }

    setUser(user) {
        this._user = user
    }

    setEmployees(employees) {
        this._employees = employees
    }

    setPositions(positions) {
        this._positions = positions
    }

    setClubCard(clubCards) {
        this._clubCards = clubCards
    }

    setCardTriff(cardTriffs) {
        this._cardTriffs = cardTriffs
    }

    get token() {
        return this._token
    }

    get isAuth() {
        return this._isAuth
    }

    get users() {
        return this._users
    }

    get user() {
        return this._user
    }

    get userToken() {
        return this._userToken
    }

    get employees() {
        return this._employees
    }

    get positions() {
        return this._positions
    }

    get clubCards() {
        return this._clubCards
    }

    get cardTriffs() {
        return this._cardTriffs
    }

}
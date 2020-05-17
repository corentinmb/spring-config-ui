class History {
  constructor () {
    this._store = []
  }

  add (value) {
    if (this.store.length >= 10) this._store.shift()
    this._store.push(value)
  }

  get store () {
    return this._store
  }
}

export default History

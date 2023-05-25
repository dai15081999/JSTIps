
const SteveError = function(msg) {
    return Object.create(Error.prototype, {
        name: {value: 'SteveError', enumerable: true, writable: true},
        message: {value: msg, enumerable: true},
        bob: {value: 'hello', enumerable: true},
    })
}

const NetworkError = class extends Error {
    constructor(response) {
        super(response.statusText)
        this.name = 'Network Error'
        this.message = response.statusText
        this.code = response.status
        this.response = response
    }
}

export {SteveError,NetworkError}
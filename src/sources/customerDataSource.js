class CustomerDataSource {
  
  constructor() {

    this.baseApiUrl = 'https://lon-hg-dev-mmoredev1.syzygy.co.uk/api/'
    this.headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }

  validate(invitation, postCode) {
    let apiUrl = this.baseApiUrl + 'customer/validate'

    return fetch(apiUrl)
  }
  
  create(data) {
    this.setAuthorization(data.token)

    let apiUrl = this.baseApiUrl + 'customer/new'
    let apiArgs = { method: 'POST', headers: this.headers, body: JSON.stringify(data.customer) }

    return fetch(apiUrl, apiArgs)
  }

  update(data) {
    this.setAuthorization(data.token)

    let apiUrl = this.baseApiUrl + 'customer/details'
    let apiArgs = { method: 'PATCH', headers: this.headers, body: JSON.stringify(data.customer) }

    return fetch(apiUrl, apiArgs)
  }

  load(data) {
    this.setAuthorization(data.token)

    let apiUrl = this.baseApiUrl + 'customer/' + data.customerId
    let apiArgs = { method: 'GET', headers: this.headers }

    return fetch(apiUrl, apiArgs)
  }

  setAuthorization(token) {
    this.headers.Authorization = "Bearer " + token
  }
}

export default new CustomerDataSource()

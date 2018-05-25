import Axios from 'axios'

const apiURl = 'https://wt-9a68b7561f2b06edc6765339cbf4ef71-0.sandbox.auth0-extend.com/recordsdb/records'

describe('#getUser() using async/await', () => {
  it('Record json?', async () => {
    const data = await Axios.get(this.apiUrl)
    expect(data).toBeDefined()
  })
})

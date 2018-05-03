import React, { Component } from 'react'
import Axios from 'axios'
import Button from '../components/reusable/Button'
import Styled from 'styled-components'

import RecordList from '../components/RecordList'

const AppWrap = Styled.div`
  background: #FFFFFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.30);
  border-radius: 10px;
  margin-top: 70px;
  padding: 0;
`
const WrapItem = Styled.div`
`
const Header = Styled.div`
  background: #795548;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 15px;
    h2 {
      margin: 0;
      color: #fff;
      letter-spacing: 1.6px;
      font-size: 24px;
  }
`
const Footer = Styled.div`
  background: whitesmoke;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 15px;
  `

class App extends Component {
  constructor() {
    super()

    this.state = {
      records: []
    }

    this.apiUrl =
      'https://wt-9a68b7561f2b06edc6765339cbf4ef71-0.sandbox.auth0-extend.com/recordsdb/records'

    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    // Fetch records from API and
    // and update `records` state
    Axios.get(this.apiUrl).then(({ data }) => {
      this.setState({ records: data })
    })
  }

  handleEdit(id) {
    // Open a modal to update a record
    // Uncomment this line later
    // this.openModal(this.state.records.find(x => x._id === id))
  }

  handleDelete(id) {
    // Delete record from API
    Axios.delete(`${this.apiUrl}?id=${id}`).then(() => {
      // Remove record from records list
      const updatedRecords = this.state.records.findIndex(x => x._id === id)
      this.setState({
        states: [...this.state.records.splice(updatedRecords, 1)]
      })
    })
  }

  openModal(record) {
    if(record) {
      this.setState({record})
    }
  }

  render() {
    return (
      <div>
      <AppWrap>
        <WrapItem>
          <Header>
            <h2>Records</h2>
          </Header>
          {}
          <RecordList
            records={this.state.records}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />

          <Footer>
            <p>Your collection is amazing.</p>
          </Footer>
        </WrapItem>
      </AppWrap>
      <Button title='+' handleClick={this.openModal.bind(this, null)} />
      </div>
    )
  }
}

export default App

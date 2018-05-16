import React, { Component } from 'react'
import Axios from 'axios'
import Styled from 'styled-components'
import Button from '../components/reusable/Button'
import Loading from '../components/reusable/Loading'
import RecordList from '../components/RecordList'
import RecordModal from '../components/RecordModal'
import Particles from '../components/reusable/Particles'

const AppWrap = Styled.div`
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 10px;
  margin-top: 70px;
  padding: 0;
  position: absolute;
  margin: 0 auto;
  top: 5%;
  width: 350px;
  left: 0;
  right: 0;
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
const WrapItem = Styled.div`
`
const HomeWrap = Styled.div`
  width: 100%
  height: auto
  background: #000000
`
const Header = Styled.div`
  background: #C9D787;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 10px;
    h1 {
      color: #e7ff58;
    letter-spacing: 1.6px;
    font-size: 30px;
    position: absolute;
    top: 125px;
    left: 10px;
    text-shadow: 1px 2px 1px #000000, 2px 2px 5px #00000075;
  }
`
const Footer = Styled.div`
  background: whitesmoke;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  position: relative;
  `

class App extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      isLoading: false,
      records: [],
      record: {
        artist: '',
        title: '',
        _id: undefined
      }
    }

    this.apiUrl =
      'https://wt-9a68b7561f2b06edc6765339cbf4ef71-0.sandbox.auth0-extend.com/recordsdb/records'
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    Axios.get(this.apiUrl).then(({ data }) => {
      this.setState({ records: data })
      this.setState({ isLoading: false })
    })
  }

  openModal(record) {
    this.setState({ modalIsOpen: true })
    if (record) {
      this.setState({ record })
    }
  }

  closeModal(model) {
    this.setState({ modalIsOpen: false })
    if (model) {
      this.setState({ isLoading: true })
      if (!model._id) {
        Axios.post(this.apiUrl, model).then(({ data }) => {
          this.setState({ records: [data, ...this.state.records] })
          this.setState({ isLoading: false })
        })
      } else {
        Axios.put(`${this.apiUrl}?id=${model._id}`, model).then(({ data }) => {
          const recordToUpdate = this.state.records.find(
            x => x._id === model._id
          )
          const updatedRecord = Object.assign({}, recordToUpdate, data)
          const newRecords = this.state.records.map(record => {
            if (data._id === record._id) return updatedRecord
            return record
          })
          this.setState({ records: newRecords })
          this.setState({ isLoading: false })
        })
      }
    }
    this.setState({
      record: {
        artist: '',
        title: '',
        _id: undefined
      }
    })
  }

  handleEdit(id) {
    this.openModal(this.state.records.find(x => x._id === id))
  }

  handleDelete(id) {
    this.setState({ isLoading: true })
    Axios.delete(`${this.apiUrl}?id=${id}`).then(() => {
      const updatedRecords = this.state.records.findIndex(x => x._id === id)
      this.setState({
        states: [...this.state.records.splice(updatedRecords, 1)]
      })
      this.setState({ isLoading: false })
    })
  }

  render() {
    return (
      <HomeWrap>
        <AppWrap>
          <WrapItem>
            <Header>
            <Particles />
              <h1>Crateless</h1>
            </Header>
            {}
            <RecordList
              records={this.state.records}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />

            <Footer>
              <Button title="+" handleClick={this.openModal.bind(this, null)} />
            </Footer>
          </WrapItem>
        </AppWrap>

        <RecordModal
            modalIsOpen={this.state.modalIsOpen}
            record={this.state.record}
            closeModal={this.closeModal}
        />
      </HomeWrap>
    )
  }
}

export default App

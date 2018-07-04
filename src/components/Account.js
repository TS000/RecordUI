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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 10px;
  padding: 0;
  position: relative;
  margin: 0 auto;
  top: 80px;
  width: 320px;
  left: 0;
  right: 0;

  @media screen and (min-width: 500px) {
      width: 450px;
    }

}
`
const Header = Styled.div`
  background: #C9D787;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 10px;
  height: 61px;
    h1 {
      color: #000000;
    letter-spacing: 1.6px;
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
      height: 200px;
    }
`
const Footer = Styled.div`
  background: whitesmoke;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  position: relative;
`
const InnerHeader = Styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  margin: 0 20px;
    p {
      font-size: 14px;
      text-align: center;
    }
`
const LoadingWrap = Styled.div`
  padding: 30px;
`

export default class Crate extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      isLoading: true,
      records: [],
      record: {
        artist: '',
        title: '',
        bpm: '',
        _id: null
      }
    }

    // This is the WebTask URL which holds my API functions, built with Express
    // I went serverless because of scalability
    this.apiUrl =
      'https://wt-9a68b7561f2b06edc6765339cbf4ef71-0.sandbox.auth0-extend.com/recordsdb/records'
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // Page loads and information is pulled from my DB
  componentDidMount() {
    Axios.get(this.apiUrl).then(({ data }) => {
      this.setState({ records: data })
      this.setState({ isLoading: false })
    })
  }

  // Opens the modal that holds the form for updating records
  openModal(record) {
    this.setState({ modalIsOpen: true })
    if (record) {
      this.setState({ record })
    }
  }

  // Handles updating the DB
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
          const recordToUpdate = this.state.records.find(x => x._id === model._id)
          const updatedRecord = Object.assign({}, recordToUpdate, data)
          const newRecords = this.state.records.map(record => {
            if (data._id === record._id) {
              return updatedRecord
            }
            return record
          })
          this.setState({ records: newRecords })
          this.setState({ isLoading: false })
        })
      }
    }

    // Update the state after the records are added
    this.setState({
      record: {
        artist: '',
        title: '',
        bpm: '',
        _id: null
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
    const { isLoading } = this.state
    return (
      <AppWrap>
        <Header>
          <Particles />
          <InnerHeader>
            <h1>Account</h1>
          </InnerHeader>
        </Header>
      </AppWrap>
    )
  }
}

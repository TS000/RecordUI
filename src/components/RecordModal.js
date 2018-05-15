import React from 'react'
import Modal from 'react-modal'
import Styled from 'styled-components'

// Modal custom styles
// Basically centering stuff

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
const ModalWrap = Styled.div`
  width: 600px !important
`
const ModalTitle = Styled.div`
  text-align: text-center
  font-size: 14px
`
const ModalButton = Styled.button`
  display: inline-block
  background: #2E6F7D
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.50)
  border:none
  width: 46%
  margin-right: 10px
  border-radius: 5px
  font-size: 20px
  color: #FFFFFF
  letter-spacing: 0.19px
  transition: all 200ms ease-in-out
  outline: none
`
const ModalButtonClose = ModalButton.extend`
  background: darkred;
`

export default class RecordModal extends React.Component {
  constructor(props) {
    super(props)
    // Internal state
    this.state = {
      artist: '',
      title: '',
      _id: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    // Re-binding artist and title values
    if (e.target.id === 'artist') {
      this.setState({ artist: e.target.value })
    }
    if (e.target.id === 'title') {
      this.setState({ title: e.target.value })
    }
  }

  componentWillReceiveProps({ record }) {
    // Update record state anytime
    // a new props is passed to the Modal
    this.setState(record)
  }

  render() {
    const { modalIsOpen, closeModal } = this.props
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal.bind(this, null)}
        shouldCloseOnOverlayClick={false}
        contentLabel="Record Modal"
        style={customStyles}
      >
        <ModalWrap>
          <ModalTitle>Record Form</ModalTitle>
          <div>
            <form>
              <div>
                <label>Artist</label>
                <input
                  type="text"
                  value={this.state.artist}
                  onChange={this.handleInputChange}
                  id="artist"
                />
              </div>
              <div>
                <label>Title</label>
                <textarea
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  cols="30"
                  id="title"
                />
              </div>
              <div>
                <ModalButton onClick={closeModal.bind(this, this.state)}>
                  Save
                </ModalButton>
                <ModalButtonClose onClick={closeModal.bind(this, null)}>
                  Cancel
                </ModalButtonClose>
              </div>
            </form>
          </div>
        </ModalWrap>
      </Modal>
    )
  }
}

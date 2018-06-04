import React from 'react'
import Modal from 'react-modal'
import Styled from 'styled-components'
import MyErrorBoundry from './reusable/MyErrorBoundry'

const customStyles = {
  content: {
    top: '50%',
    borderRadius: '10px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
const ModalWrap = Styled.div`
  width: 265px
`
const ModalTitle = Styled.div`
  text-align: text-center
  font-size: 14px
`
const ModalButton = Styled.button`
  display: inline-block
  background: #4CAF50
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

// extending CSS classes is awesome
const ModalButtonClose = ModalButton.extend`
  background: #f44336;
`
const LabelWrap = Styled.div`
  display: inline-block;
  margin-left: 20px;
  label {
    font-size: 14px;
  }
  input {
    border: 1px solid #bebebe;
    margin: 15px;
  }
`

export default class RecordModal extends React.Component {
  constructor(props) {
    super(props)
    // Internal state
    this.state = {
      artist: '',
      title: '',
      bpm: '',
      genre: '',
      _id: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    // Re-binding values
    if (e.target.id === 'artist') {
      this.setState({ artist: e.target.value })
    }
    if (e.target.id === 'title') {
      this.setState({ title: e.target.value })
    }
    if (e.target.id === 'bpm') {
      this.setState({ bpm: e.target.value })
    }
    if (e.target.id === 'genre') {
      this.setState({ genre: e.target.value })
    }
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
        <MyErrorBoundry>
          <ModalWrap>
            <ModalTitle>Record Info</ModalTitle>
            <div>
              <form>
                <LabelWrap>
                  <label>Artist</label>
                  <input
                    type="text"
                    value={this.state.artist}
                    onChange={this.handleInputChange}
                    id="artist"
                  />
                </LabelWrap>
                <LabelWrap>
                  <label>Title</label>
                  <input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    cols="30"
                    id="title"
                  />
                </LabelWrap>
                <LabelWrap>
                  <label>Genre</label>
                  <input
                    value={this.state.genre}
                    onChange={this.handleInputChange}
                    cols="30"
                    id="genre"
                  />
                </LabelWrap>
                <LabelWrap>
                  <label>BPM</label>
                  <input
                    value={this.state.bpm}
                    onChange={this.handleInputChange}
                    cols="30"
                    id="bpm"
                  />
                </LabelWrap>
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
        </MyErrorBoundry>
      </Modal>
    )
  }
}

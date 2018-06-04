import React from 'react'
import FontAwesome from 'react-fontawesome'
import Styled from 'styled-components'

const Record = Styled.div`
  padding: 5px 5px;
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #F8F8F8 98%);
    border-bottom: 1px solid #D5D5D5;
`
const RecordContent = Styled.div`
  color: #444444;
  padding: 10px;
  position: relative;
    h4 {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #000000;
      margin: 0;
    }
    h3 {
      color: #FF005F;
      font-size: 16px;
      position: absolute;
      right: 10px;
      top: -12px;
      text-transform: capitalize;
    }
    span {
      font-size: 12px;
      text-transform: capitalize;
      float: right;
      position: relative;
      bottom: 15px;
    }

    p {
      font-size: 14px;
    }
`

const RecordControl = Styled.div`
    position: relative;
    float: right;
    right: 4px;
    bottom: 20px;
    font-size: 16px;
    span:first-child  {
      margin-right: 5px;

    }
    span:first-child:hover {
    color: green;
    cursor: pointer;
    
  }
  span:last-child {
    &:hover {
    color: red;
    cursor: pointer;
  }
}
`

export default class RecordItem extends React.Component {
  render() {
    const { record, handleEdit, handleDelete } = this.props
    return (
      <Record>
        <RecordContent>
          <h4>{record.artist}</h4>
          <p>{record.title}<span>{record.genre}</span></p>
          <h3>{record.bpm}</h3>

        </RecordContent>
        <RecordControl>
          <span onClick={handleEdit.bind(this, record._id)} ><FontAwesome name='edit' /></span>
          <span onClick={handleDelete.bind(this, record._id)}><FontAwesome name='trash' /></span>
        </RecordControl>
      </Record>
    )
  }
}
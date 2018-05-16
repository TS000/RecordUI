import React from 'react'
import Styled from 'styled-components'

const Record = Styled.div`
  padding: 5px 5px;
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #F8F8F8 98%);
    border-bottom: 1px solid #D5D5D5;
`
const RecordContent = Styled.div`
  color: #444444;
  padding: 10px;
    h4 {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #000000;
      margin: 0;
    }
`

const RecordControl = Styled.div`
      position: relative;
    float: right;
    right: 16px;
    bottom: 20px;
    span:first-child:hover {
    color: #2E6F7D;
    cursor: pointer;
  }
  span:last-child:hover {
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
          <p>{record.title}</p>
        </RecordContent>
        <RecordControl>
          <span onClick={handleEdit.bind(this, record._id)} >O</span>
          <span onClick={handleDelete.bind(this, record._id)}>X</span>
        </RecordControl>
      </Record>
    )
  }
}

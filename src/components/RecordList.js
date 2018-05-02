import React from 'react'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'
import RecordItem from './RecordItem'

const RecordList = styled.div`
  background-color: grey
  content: ""
  display: table
  clear: both
`
// clearfix
export default ({ records, handleEdit, handleDelete }) => (
  <RecordList>
    <FlipMove
      duration={350}
      easing='ease-in-out'
      enterAnimation='accordionHorizontal'
    >
      {records.map(record => (
        <RecordItem
          record={record}
          key={record._id}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </FlipMove>
  </RecordList>
)

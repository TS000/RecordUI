import React from 'react'
import Styled from 'styled-components'
import FlipMove from 'react-flip-move'
import RecordItem from './RecordItem'
import MyErrorBoundry from './reusable/MyErrorBoundry'

const RecordList = Styled.div`
  background-color: grey
  content: ""
  display: table
  clear: both
`

export default ({ records, handleEdit, handleDelete }) => (
  <RecordList>
    <MyErrorBoundry>
      <FlipMove
        duration={350}
        easing="ease-in-out"
        enterAnimation="accordionHorizontal"
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
    </MyErrorBoundry>
  </RecordList>
)

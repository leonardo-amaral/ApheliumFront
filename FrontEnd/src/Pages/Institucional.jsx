import React from 'react'
import Content from '../Components/Content'
import Blog from '../Content/Blog'
import CreatePort from '../Content/CreatePort'
import End from '../Content/End'
import Frame from '../Content/Frame'
import GetStarted from '../Content/GetStarted'
import TheMost from '../Content/TheMost'
import TradeAny from '../Content/TradeAny'

function Institucional() {
  return (
    <div>
      <Frame />
      <Content />
      <GetStarted />
      <CreatePort />
      <TradeAny />
      <TheMost />
      <Blog />
      <End />
    </div>
  )
}

export default Institucional
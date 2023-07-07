import React from 'react'
import PopupWrapper from './PopupWrapper'
import ReactGiphySearchbox from 'react-giphy-searchbox'

const Gif = (props) => {
  return (
    <PopupWrapper {...props}>
      <div className='w-[100vw]'><ReactGiphySearchbox
        apiKey="NjzeIZKghkPY4b2aCoocDj9TrnVZvQ3Z"
        onSelect={item => console.log(item)}
        poweredByGiphy={false}
      /></div>
    </PopupWrapper>
  )
}

export default Gif
import React from 'react'

const VedioCard = ({info}) => {
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 md:w-[75%] '>
      <img src={thumbnails.high.url} alt="Thumnail" className='rounded-lg' />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{Intl.NumberFormat("en", {notation: "compact"}).format(statistics.viewCount)+" Views"}</li>
      </ul>
    </div>
  )
}

export default VedioCard
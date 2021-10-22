import React from 'react'

function ItemPostComment(props) {
  const { comment } = props
  const { name, time, content, img } = comment;
  let dtime = time !== '' ? time.slice(0, 15) : 'Nov 08 2021'
  return (
    <li key={content} className="flex mt-4">
      <div className="px-3/12">
        <div className="w-110">
          {img === null || img === undefined ? (<div className="bg-red-400 w-20 h-20">{name}</div>) : (<img className="rounded-full" src="https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author-2.webp" alt="/" />)}
          {/* <img className="rounded-full" src={img} alt="/" /> */}
        </div>
      </div>
      <div className="flex flex-col px-3/12">
        <div className="">
          <div className="text-xs text-gray-400">
            <i className="mr-1 far fa-calendar-alt"></i>
            <span>{dtime}</span>
          </div>
          <h3 className="mt-1 text-18 text-base font-medium">
            {name}
          </h3>
          <p className="mt-3">
            {`${content}
                            `}
          </p>
        </div>
      </div>
    </li>
  )
}

export default ItemPostComment

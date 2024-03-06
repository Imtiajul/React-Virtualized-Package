import React from "react"

const ListItem = ({name, imageUrl, text, style}) => {
   console.log(imageUrl);
   
  return (
    <div className="flex gap-3 my-2 flex-nowrap border border-slate-300 bg-blue-200" style={style}>
      <img
        src={imageUrl}
        alt={name}
        className="rounded-lg "
      />
      <div className="inline-block">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ListItem

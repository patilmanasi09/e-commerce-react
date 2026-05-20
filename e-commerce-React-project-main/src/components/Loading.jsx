import React from 'react'

const Loading = () => {
  return (
    <div style={
        {height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(251, 219, 245)"}
    }>
      <img src="https://avatars.githubusercontent.com/u/3213662?s=280&v=4" alt="" style={{ height: "90px", objectFit: "contain"}}/>
    </div>
  )
}

export default Loading

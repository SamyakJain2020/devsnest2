import React from 'react'

const Screen = ({theme , screen}) => {
  console.log(screen);
  return (
      <div className={`overflow-hidden screen-${theme}`}> 
        {(screen=="")? "0" : screen }
      </div>
  )
}

export default Screen
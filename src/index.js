import React from 'react'
import ReactDom from 'react-dom'

function BookLust(){
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const  Book = () => {
  return (
    <div className="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41HQI3QQOcL._SX327_BO1,204,203,200_.jpg" alt=""/>
      <h1 className="title">The Testaments: The Sequel to The Handmaid's Tale </h1>
      <h3 className="author">by Margaret Atwood </h3>
    </div>
  )
}

ReactDom.render(<BookLust/>, document.getElementById('root'));

import React, { Component } from 'react'

export class Newsitem extends Component {
   
  render() {
  let  { title, discription,imageUrl,newsUrl} = this.props;
    return (
       
      <div className='my-3'>
     <div  className="card" >
            
                <img src={!imageUrl?"https://st1.bgr.in/wp-content/uploads/2022/02/Redmi-Note-11-Display.jpg":imageUrl}  className="card-img-top" alt="..."/>
                <div  className="card-body">
                    <h5  className="card-title">{title}</h5>
                    <p  className="card-text">{discription}</p>
                    <a rel="noopener" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
</div>
        
      </div>
    )
  }
}

export default Newsitem

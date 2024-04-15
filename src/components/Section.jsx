import React from 'react'

function Section(props) {
    
    let imageData=props.data
  return (
       <section>
           {
             imageData.map(image=>{
               return(
                 <div key={image.id} className="column">
                   <img src={image.img} alt=""></img>
                 </div>
               )
             })
           }
   
       </section>
  )
}

export default Section
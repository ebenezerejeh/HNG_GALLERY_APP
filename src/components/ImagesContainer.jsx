import React from 'react'
import { useState } from 'react'
import { data } from '../data'
import Loading from '../pages/loading'
import { useGlobalContext } from '../context'
import {motion} from 'framer-motion'
import { DragDropContext } from 'react-beautiful-dnd'

const ImagesContainer = () => {
  // const [value, setValue] = useState(data);
  const {loading, filteredItem} = useGlobalContext();

  console.log(filteredItem);

  if(loading){
    return <Loading/>
  }

  if(filteredItem.length < 1){
    return <div><h1>NO TAG MATCHED YOUR SEARCH</h1></div>
  }
  return (
    <>
            <div className="all_images_container">
                            <div className="gallery_heading_container">

                                <span className="gallery_heading">image Gallery</span>

                            </div>

                            
                                  <div className="image_gallery" >

                            
                                  {filteredItem.map((item, index )=>{
                                    const {id, tag, img} = item;
                                    return (
                                        
                                          <div className="image_container"  key={id}>
                                          <span className="image_tag">{tag}</span>
                                          <img className="single_image" src={img} alt={tag}/>
      
                                      </div>
                                      

                                      
                                      
                                      
                                    ) 
      
      
                                  })}
                                  
                                      
                                  </div>




                </div>
    </>
  )
}

export default ImagesContainer
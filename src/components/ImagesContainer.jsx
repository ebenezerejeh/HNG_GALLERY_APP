import React, { useEffect } from 'react'
import { useState } from 'react'
import { data } from '../data'
import Loading from '../pages/loading'
import { useGlobalContext } from '../context'
import {motion} from 'framer-motion'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'



const ImagesContainer = () => {
  // const [value, setValue] = useState(data);
  const {loading, filteredItem} = useGlobalContext();
  const [stores, setStores]= useState(filteredItem)

  console.log(filteredItem);
  console.log(stores);
  

  const handleDragDrop=(results)=> {
    const {source, destination, type} = results;
    if(!destination) return;
    if(source.droppableId===destination.droppableId && 
      source.index === destination.index) 
      return;
      if(type==='group'){
        const reorderedStores = [...stores];
    
        const sourceIndex = source.index;
        const destinationIndex = destination.index
        const [removedStore] =reorderedStores.splice(sourceIndex, 1);
        reorderedStores.splice(destinationIndex, 0, removedStore)
    
        return setStores(reorderedStores)
    
      }
      }

      useEffect(()=>{
        setStores(filteredItem)
      },[filteredItem])







  if(loading){
    return <Loading/>
  }

  if(stores.length < 1){
    return <div><h1>NO TAG MATCHED YOUR SEARCH</h1></div>
  }
  return (
    <>
          <DragDropContext onDragEnd={handleDragDrop}>
            <div className="all_images_container">
                            <div className="gallery_heading_container">

                                <span className="gallery_heading">image Gallery</span>

                            </div>

                            <Droppable droppableId="ROOT" type="group">
                            {(provided)=>(
                              <div className="image_gallery" {...provided.droppableProps} ref={provided.innerRef}>

                            
                              {stores.map((item, index )=>{
                                const {id, tag, img} = item;
                                return (
                                  <Draggable draggableId={id} key={id} index={index} >
                                      {(provided)=>(
                                        <div className="image_container"  {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                        <span className="image_tag">{tag}</span>
                                        <img className="single_image" src={img} alt={tag}/>
    
                                        </div>
                                      )}

                                      </Draggable>
                                  

                                  
                                  
                                  
                                ) 
  
  
                              })}

                                    {provided.placeholder}
                              </div>
                            )}
                                  
                                  </Droppable>




                </div>
                </DragDropContext>
    </>
  )
}

export default ImagesContainer
import React, {useRef, useEffect, useState} from 'react'
import { useGlobalContext } from '../context'

const Header = () => {
  const { setSearchItem,UserSignOut } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState('');
  // const searchData = useRef('');
  
  

  // useEffect(()=>{
  //   searchData.current.focus();

  // },[])

  useEffect(()=>{
    setSearchItem(searchTerm)

    console.log(searchTerm)
  },[searchTerm])
  ;

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
    <header>
      <button className="logOut" onClick={UserSignOut}>Log Out</button>
            <div className="search_container">
                <form className="element_container" onSubmit={handleSubmit}>
                                            
                            <input type="text" className="search"  placeholder="Search with Tags..." 
                              onChange={(e)=>setSearchTerm(e.target.value)}/> 
                            
                        
                        
                            
    
                        
    
                    </form>
    
       
                    
            </div>
        </header>
    
    </>
  )
}

export default Header
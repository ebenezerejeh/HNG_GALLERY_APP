import React, { useState, useContext, useEffect} from 'react'
import {data} from './data'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'



const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2]= useState(true);
    const [searchItem, setSearchItem] = useState('');
    const [card, setCard] = useState(data);
    const [filteredItem, setFilteredItem] = useState([]);
    const [authUser, setAuthUser] = useState(null);


    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if (user){
                setAuthUser(user)
                setLoading2(false);
                console.log('logged in')
            } else {
                setAuthUser(null);
                setLoading2(true)
                console.log('Not logged in')
            }
        })
    }, []);

    const UserSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('sign out successfully')
        }).catch(error=>console.log(error))
    };


    console.log(searchItem);
    useEffect(()=>{
        let dataSecond = card.filter((item)=>{
            if (searchItem===''){
                return item;
              }else{
                return item.tag.toLowerCase().startsWith(searchItem.toLowerCase());
                }

        });

        if(dataSecond){
            setFilteredItem(dataSecond)
          setLoading(false);
        }else if(dataSecond===""){
          setFilteredItem([])
          setLoading(true);
          
        }


    },[searchItem]);

    return (
        <AppContext.Provider
        value={{
            loading,
            searchItem,
            card,
            setSearchItem,
            filteredItem,
            setFilteredItem,
            setLoading2,
            authUser,
            UserSignOut,
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}

export { AppContext, AppProvider }
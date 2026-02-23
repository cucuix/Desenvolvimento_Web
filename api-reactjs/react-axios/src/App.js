import React, {useEffect, useState} from "react";
import api from "./services/api";
import './App.css';

export default function App() {
    const [username, setUsername] = useState('cucuix');
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    
    //carrega dados da API
    useEffect(() =>{
      async function loadData(){
        try {

        } catch(error){

        }
      }


      async function loadUser() {
        try{
          const response = await api.get('/users/cucuix');
          setUser(response.data);
        } catch(error){
          console.log('Erro', error)
        }         
      }
      loadUser();
    }, [])
    if(!user) return <div>Carregando...</div>

    return (
      <div className={App}>
        <p>Usuário: {user.login}</p>
        <p>Biografia: {user.bio || 'Sem biografia'}</p>
      </div>
    )
  }


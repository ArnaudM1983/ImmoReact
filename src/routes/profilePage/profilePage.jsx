import React from 'react'
import List from '../../components/list/list'
import "./profilePage.scss";
import Chat from '../../components/chat/chat';

function ProfilePage() {
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>Mes Infos Perso</h1>
                    <button>Valider</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="/profil.png" alt="" /></span>
                    <span>Nom d'utilisateur: <b>Arnaud Meusy</b></span>
                    <span>Email: <b>arnaud@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>Ma Liste</h1>
                    <button>Créer</button>
                </div>
                <List />
                <div className="title">
                    <h1>Liste Sauvegardée</h1>
                </div>
                <List />
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default ProfilePage
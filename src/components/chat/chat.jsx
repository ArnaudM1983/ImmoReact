import React, { useState } from 'react';
import './chat.scss';

function Chat() {
    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
                <div className="message">
                    <img src="/profil.png" alt="" />
                    <span>Arnaud Meusy</span>
                    <p>Lorem ipsum, dolor...</p>
                </div>
            </div>
            {chat &&
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="/profil.png" alt="" />
                            Arnaud Meusy
                            <span className="close" onClick={()=>setChat(null)}>X</span>
                        </div>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit...</p>
                            <span>Il y a 1 heure</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit...</p>
                            <span>Il y a 1 heure</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit...</p>
                            <span>Il y a 1 heure</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit...</p>
                            <span>Il y a 1 heure</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>Envoyer</button>
                    </div>
                </div>}
        </div>
    )
}

export default Chat
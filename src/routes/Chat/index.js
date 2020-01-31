import React from "react"
import './styles.css'


const Chat = () => {
    return (
        <div className="container">
            <div className="personChat">
                <div className="containerHeader">
                    <p>Agent</p>
                </div>
                <div className="isinyaChat">
                    <div className="chatItem"><span>Hello!</span></div>
                </div>
                <div className="containerChat">
                    <input className="inputChat" type="text" placeholder="type your message"></input>
                    <button className="buttonSend">Kirim</button>
                </div>
            </div>
            <div className="personChat">
                <div className="containerHeader">
                    <p>Customer</p>
                </div>
                <div className="isinyaChat">
                    <div className="chatItem"><span>Hai!</span></div>
                </div>
                <div className="containerChat">
                    <input className="inputChat" type="text" placeholder="type your message"></input>
                    <button className="buttonSend">Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
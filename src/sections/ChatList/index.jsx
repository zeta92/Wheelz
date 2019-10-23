import React from "react";

import firebase from "../../firebase.js";
import {Link} from "react-router-dom";



class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            chats : []
        }
    }

    componentDidMount(){
        firebase.initialized.then((connection)=> {
            connection.firestore().collection('users').doc(this.props.userId).collection('chats').onSnapshot((snapshot)=>{
                snapshot.docs.forEach((chatSnap)=>{
                    chatSnap.data().chat.get().then((chat)=>{
                        chat.data().users.filter((u) => u.id !== this.props.userId ).forEach((userSnap)=>{
                            userSnap.get().then((user)=>{
                                console.log(user.data())
                                this.setState({
                                    chats: [
                                        ...this.state.chats,
                                        {
                                            id: chat.data().id,
                                            user: {
                                                name:  user.data().name
                                            }
                                        }
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        })
    }


    render(){
        console.log('chats',this.state.chats)
        return(
            <div >
                {
                    this.state.chats.map((chat)=> <Link key={chat.id} to={'/chat/'+ chat.id}>{chat.user.name}</Link>)
                }
            </div>
        )
    }
}

export default ChatList
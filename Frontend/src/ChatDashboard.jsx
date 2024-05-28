import React, { useState, useEffect, useRef } from 'react';
import Input from '../Components/Input';
import './assets/Chatdashboard.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client'; 

function ChatDashboard() {

     //Constants 
     const [token, setToken] = useState();
     const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
     const [conversations, setConversations] = useState([]);
     const [messages, setMessages] = useState({ messages: [], receiver: null, conversationId: null });
     const [message, setMessage] = useState('');
     const [users, setUsers] = useState([]);
     const messageRef = useRef(null);
     const [socket, setSocket] = useState(null);
        // Retrieve token from local storage
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

     console.log('messages :>>', messages);
     console.log('users :>>', users);
     console.log('conversations :>>', conversations);
     console.log('message :>>', message);
     console.log('user :>>', user);


useEffect(() => {

  if (storedToken) {
    setToken(storedToken);
  }

  if (storedUser) {
    setUser(storedUser);
  }
}, []);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        switch (user.role) {
          case "Admin":
            navigate('/adminprofile');
            break;
          case "Student":
            navigate('/studentprofile');
            break;
          case "Teacher":
            navigate('/teachersprofile');
            break;
          default:
            navigate('/alumniprofile');
            break;
        }
      };


      useEffect(() => {
        if (!user) {
          console.error('User is not defined');
          return;
        }
      }, [user]);

//Socket Io Connection

      useEffect(() => {
        const socketInstance = io('http://localhost:3000');
        setSocket(socketInstance);
    
        return () => {
          socketInstance.disconnect();
        };
      }, []);
    
      useEffect(() => {
        if (socket && user) {
          socket.emit('addUser', user._id);
          socket.on('getUsers', (users) => {
            console.log('activeUsers :>> ', users);
          });
          socket.on('getMessage', (data) => {
            setMessages((prev) => ({
              ...prev,
              messages: [...prev.messages, { user: data.user, message: data.message }],
            }));
          });
        }
      }, [socket, user]);

//Get Conservations

useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await fetch(`http://localhost:3000/FYP/api/conversations/${user._id}`);
        if (res.ok) {
          const resData = await res.json();
          setConversations(resData);
        } else {
          console.error('Failed to fetch conversations');
        }
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, [user]);

      //Create Conversation
      const createConversation = async (senderId, receiverId) => {
        try {
          const res = await fetch('http://localhost:3000/FYP/api/conversation', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              senderId,
              receiverId,
            }),
          });
      
          if (!res.ok) {
            console.error('Failed to create conversation');
            return null;
          }
      
          const data = await res.json();
          return data.conversationId;
        } catch (error) {
          console.error('Error creating conversation:', error);
          return null;
        }
      };
      

      //Get Messages
      const fetchMessages = async (conversationId, receiver, token) => {
        try {
            console.log('fetchMessages - User:', user); // Log the user object
            if (!user || !user._id) {
                console.error('User object or user id is undefined');
                return;
            }
    
            const res = await fetch(
                `http://localhost:3000/FYP/api/message/${conversationId}?senderId=${user._id}&receiverId=${receiver.receiverId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
    
            if (res.ok) {
                const resData = await res.json();
                setMessages({ messages: resData, receiver, conversationId });
            } else {
                console.error('Failed to fetch messages, status:', res.status);
                const errorText = await res.text();
                console.error('Error details:', errorText);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    
    
      
    
      //Send Message

    const sendMessage = async (e) => {
  e.preventDefault();
  if (!message.trim() || !messages.receiver || !messages.receiver.receiverId) {
    console.error('Sender or receiver ID is missing');
    return;
  }

  const trimmedMessage = message.trim();
  setMessage('');

  const senderId = user._id; // Assuming user.id is the sender's ID
  const receiverId = messages.receiver.receiverId;

  socket?.emit('sendMessage', {
    senderId,
    receiverId,
    message: trimmedMessage,
    conversationId: messages.conversationId,
  });

  try {
    const res = await fetch('http://localhost:3000/FYP/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversationId: messages.conversationId,
        senderId,
        receiverId,
        message: trimmedMessage,
      }),
    });

    if (!res.ok) {
      console.error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

      
//Users

useEffect(() => {
    if (user) {
      const fetchUsers = async () => {
        try {
          const res = await fetch(`http://localhost:3000/FYP/api/users/${user._id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (res.ok) {
            const resData = await res.json();
            setUsers(resData);
          } else {
            console.error('Failed to fetch users');
          }
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
      fetchUsers();
    }
  }, [user]);

  //Message Refrence
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);


  return (
    <>
    <div className='sidebar'>
      <div className='user-profile'>

        <div><img src="8724.jpg" width={75} height={75} className='profile-pic' alt="Profile" /></div>
        <div className='user-details'>
          <h3 className='user-name'>{user && <h1>{user.FirstName} {user.LastName}</h1>}</h3>
          <button onClick={handleSubmit}>
          <p className='user-account'> My Account</p>
        </button>
        </div>
      </div>
      <hr />
      <div className='conversations'>
        <div className='conversations-title'>Messages</div>
                {
        conversations.length > 0 ? (
            conversations.map(({ conversationId, user }) => (
            <div className='conversation' key={conversationId} onClick={() => fetchMessages(conversationId, user)}>
                <div><img src='Std 2.jpg' className="conversation-pic" alt="Profile" /></div>
                <div className='conversation-details'>
                <h3 className='conversation-name'>{user?.FirstName}</h3>
                <p className='conversation-email'>{user?.email}</p>
                </div>
            </div>
            ))
        ) : (
            <div className='no-conversations'>No Conversations</div>
        )
        }
      </div>
    </div>
    <div className='chat-window'>
    {messages?.receiver?.FirstName && (
        <div className='chat-header'>
          <div><img src="Std 2.jpg" width={60} height={60} className="receiver-pic" alt="Receiver" /></div>
          <div className='receiver-details'>
            <h3 className='receiver-name'>{messages?.receiver?.FirstName}</h3>
            <p className='receiver-email'>{messages?.receiver?.email}</p>
          </div>
          <div className='call-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <line x1="15" y1="9" x2="20" y2="4" />
              <polyline points="16 4 20 4 20 8" />
            </svg>
          </div>
        </div>
      )}
      <div className='messages'>
        <div className='messages-container'>
          {messages?.messages?.length > 0 ? (
            messages.messages.map(({ message, user: { id } = {} }, index) => (
              <React.Fragment key={index}>
                <div className={`message ${id === user?._id ? 'sent-message' : 'received-message'}`}>
                  {message}
                </div>
                <div ref={messageRef}></div>
              </React.Fragment>
            ))
          ) : (
            <div className='no-messages'>No Messages or No Conversation Selected</div>
          )}
        </div>
      </div>
      {
          messages?.receiver?.FirstName &&
          <div className='message-input'>
            <Input placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} className='input' inputClassName='input-field' />
            <div className={`send-icon ${!message && 'disabled'}`} onClick={(e) => sendMessage(e)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </div>
            <div className={`add-icon ${!message && 'disabled'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
            </div>
          </div>
        }
    </div>
    <div className='people'>
      <div className='people-title'>People</div>
      {users.length > 0 ? (
        users.map(({ id,email, FirstName, receiverId }) => (
          <div key={receiverId} className='person' onClick={() => fetchMessages('new', { id, email, FirstName, receiverId })}>
            <div><img src="Std 2.jpg" className="person-pic" alt="Person" /></div>
            <div className='person-details'>

              <h3 className='person-name'>{FirstName}</h3>
              <p className='person-email'>{email}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='no-people'>No Conversations</div>
      )}
    </div>
  </>
    
  )
}

export default ChatDashboard
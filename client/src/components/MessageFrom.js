import React from 'react';

function MessageFrom({ message }) {
  return (
    <div 
      style={{ 
        backgroundColor: '#e1ffc7', 
        padding: '15px 15px',
        borderRadius: '15px',
        maxWidth: '80%',
        margin: '10px',
        alignSelf: 'flex-end',
        display: 'inline-block',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
    >
      <strong style={{ fontSize: '1.1em' }}>{message.sender.username}:</strong>
      <p style={{ fontSize: '1.05em', marginTop: '8px' }}>{message.content}</p>
      {message.image_url && (
        <div>
          <img 
            src={message.image_url} 
            alt="Message attachment" 
            style={{ 
              maxWidth: '400px', 
              maxHeight: '600px',
              objectFit: 'contain', 
              marginTop: '15px',
              borderRadius: '10px'
            }} 
          />
        </div>
      )}
      <small style={{ display: 'block', marginTop: '10px', textAlign: 'right' }}>
        {new Date(message.timestamp).toLocaleString()}
      </small>
    </div>
  );
}

export default MessageFrom;

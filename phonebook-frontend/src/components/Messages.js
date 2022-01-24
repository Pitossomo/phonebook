import React from 'react' 

const Message = ({content}) => <li>{content}</li>

const Messages = ({errorMessages, successMessages}) => {
    /* CSS for error class */
  const errorStyle = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 16,
    padding: 4,
    margin: 4,
    border: 'solid 2px red',
    borderRadius: '5px'
  }
  /* CSS for success class */
  const successStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    padding: 4,
    margin: 4,
    border: 'solid 2px green',
    borderRadius: '5px'
  }

  return (
    <div>
      { errorMessages.length > 0 
        ? <div className="errorMessages" style={errorStyle}>
            { errorMessages.map((content, i) => <Message key={`err${i}`} content={content} />) }
          </div>
        : null
      }
      { successMessages.length > 0
        ? <div className="successMessages" style={successStyle}>
            { successMessages.map((content, i) => <Message key={`suc${i}`} content={content} />)}
          </div>
        : null
      }
    </div>
  )
}

export default Messages
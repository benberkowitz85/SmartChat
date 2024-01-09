//Define Margin between messages depending on relation to sender
export const isSameSenderMargin = (messages, m, i, userId) => {
  
    if (
      i < messages.length - 1 &&
      messages[i + 1].sender._id === m.sender._id &&
      messages[i].sender._id !== userId
    )
      return 33;
    else if (
      (i < messages.length - 1 &&
        messages[i + 1].sender._id !== m.sender._id &&
        messages[i].sender._id !== userId) ||
      (i === messages.length - 1 && messages[i].sender._id !== userId)
    )
      return 0;
    else return "auto";
  };

//check if the sender is the user or the same sender as previous messages
export const checkSameSender=(messages, m, i, userId) =>{
    return (
        i < messages.length - 1 && (messages[i+1].sender._id !==m.sender._id ||
            messages[i+1].sender._id === undefined && messages[i].sender._id !== userId)

    )
  };
//check messages against each other to see if they have the same sender
export const checkSameUser = (messages, m, i) => {
    return i > 0 && messages[i-1].sender._id === m.sender._id;
};

//check if sender is user, else log sender's username
export const checkSender = (loggedUser, users) => {
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
  };
  //Return sender username
  export const getSenderFull = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1] : users[0];
  };

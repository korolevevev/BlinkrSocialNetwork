import {useState} from "react";
import {useSelector} from "react-redux";

export const MessagesPage = () => {
    const state = useSelector(store => store.messagesState)

    const [chosenDialog, setChosenDialog] = useState(1)

    const switchDialog = (userID) => {
        setChosenDialog(userID)
    }

    return (
        <div className='container-fluid d-flex flex-row p-0'>
            <div className='p-3 d-flex flex-column border-dark'
                 style={{borderRight: '1px solid', width: '200px'}}>
                {state.userList.map((user) => {
                    return (
                        <button className='btn btn-light p-3 mb-1 align-content-start'
                             key={user.userID}
                             onClick={() => switchDialog(user.userID)}>
                            {user.name}
                        </button>
                    )
                })}
            </div>
            <div className='p-3 position-relative w-75'>
                {state.dialogList.find(dialog => dialog.userID === chosenDialog).messages.map((message) => {
                    let messageStyle = ''
                    let spanStyle = 'mb-1 text-secondary '
                    let whoseMessageIs = ''

                    if (message.sender === 'me') {
                        messageStyle = 'd-flex align-items-center bg-info px-3 py-1 mb-2 ms-auto'
                        spanStyle += 'ms-auto'
                        whoseMessageIs = 'You'
                    } else {
                        messageStyle = 'd-flex align-items-center bg-warning px-3 py-1 mb-2'
                        whoseMessageIs = state.userList[chosenDialog-1].name
                    }

                    return (
                        <div className='d-flex flex-column'>
                            <span className={spanStyle} style={{fontSize: '13px'}}>{whoseMessageIs}</span>
                            <div className={messageStyle} style={{width: '45%', borderRadius: '10px'}}>
                                {message.message}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
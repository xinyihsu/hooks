import React, { useImperativeHandle, useRef, useState } from "react";

function App() {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    return(
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <button onClick={() => modalRef.current.focusCloseButton()}>Focus Close</button>
            <button onClick={() => modalRef.current.focusConfirmButton()}>Focus Confirm</button>
            <button onClick={() => modalRef.current.focusDenyButton()}>Focus Deny</button>
            <ConfirmationModal
                ref={modalRef}
                isOpen={open}
                onClose={() => setOpen(false)} />
        </>
    );
}

const ConfirmationModal = React.forwardRef(({isOpen, onClose}, ref) => {
    const closeRef = useRef();
    const confirmRef = useRef();
    const denyRef = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            focusCloseButton:() => closeRef.current.focus(),
            focusConfirmButton:() => confirmRef.current.focus(),
            focusDenyButton:() => denyRef.current.focus()
        }
    }) //X->[]
    
    if (!isOpen) return null;
    
    return(
        <div className="modal" ref={ref}>
            <button className="close-btn" onClick={onClose} ref={closeRef}>&times;</button>
            <div className="modal-header"><h1>Title</h1></div>
            <div className="modal-body">Do you confirm?</div>
            <div className="modal-footer">
                <button className="confirm-btn" onClick={onClose} ref={confirmRef}>Yes</button>
                <button className="deny-btn" onClick={onClose} ref={denyRef}>No</button>
            </div>
        </div>
    );
});

export default App;
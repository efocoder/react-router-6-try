import classes from './Modal.module.css'
import {useNavigate} from "react-router-dom";

function Modal({children}) {
    const navigate = useNavigate()

    function closeModal() {
        navigate('..')
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeModal}/>
            <dialog open={true} className={classes.modal}>{children}</dialog>
        </>
    )
}

export default Modal
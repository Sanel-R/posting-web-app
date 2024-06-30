import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal( {children, onClose} )
{

    const navigate = useNavigate();

    function closeHandle()
    {
        // navigate back.
        navigate('..');
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandle}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;
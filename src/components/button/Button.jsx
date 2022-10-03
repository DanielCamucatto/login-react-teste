import { useState } from "react";
import Modal from "../modal/Modal";

const  Button = ({children}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <div className="">
            <button onClick={() => setIsModalVisible(true)} className="form-container__btn">
                <a>{children}</a>
            </button>
            { isModalVisible ? 
            <Modal onClose={ () => setIsModalVisible(false)}>
                <p>ok</p>
            </Modal> : null}
           
        </div>
        

    )
}
export default Button;
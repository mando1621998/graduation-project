import React from 'react';
import '../Modal/Modal.css'

export const Modal = () =>{
    return(
        <React.Fragment>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <p>Welcome to our modal</p>
                    <span className="close-modal-btn">X</span>
                </div>

                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Modal</h4>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel">Close</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
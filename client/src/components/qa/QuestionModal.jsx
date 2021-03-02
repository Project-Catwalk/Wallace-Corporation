import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styleComponents/App.module.css';
// import styles from '../../styleComponents/QA.modules.css';

// function QuestionModal() {
//   return (
//     <>
//       <div>
//         <h3>Ask Your Question</h3>
//         <h2>About the "product"</h2>
//       </div>
//       <div>
//         <form action="">
//           <p>Question: </p>
//           <input type="text" />
//           <p>What is your nickname?</p>
//           <input placerholder="example: jackson11!" type="text" />
//           <p>email</p>
//           <input type="text" />
//           <button>Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

function Modal({ open, children, onClose }) {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>Ask Your Question about the Product</h3>
          <p className={styles.closeModal} onClick={onClose}>x</p>
        </div>
        <div>
          <form action="">
            <p>Question:</p>
            <textarea maxLength="1000" className={styles.qInput} type="text" />
            <p>What is your nickname?</p>
            <input placeholder="example: jackson11!" type="text" />
            <p>email</p>
            <input type="text" />
            <div />
            <button className={styles.modalButton} >Submit</button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('modal'),
  );
}

export default Modal;

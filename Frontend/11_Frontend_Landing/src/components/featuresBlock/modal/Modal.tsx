import { FC } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Hi, we're <span>Tinvio!</span>  And you?</h2>
        <form className={styles.form}>
          <label>
            <p>
              Name
            </p>
            <input type="text" placeholder="John Appleseed" />
          </label>
          <label>
            <p>
              Business Name
            </p>
            <input type="text" placeholder="Burgers & Boba (Singapore)" />
          </label>
          <label>
            <p>
              Phone
            </p>
            <input type="text" placeholder="65 9123 4567" />
          </label>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
        <p className={styles.noSpam}>No spam, promise 🙌</p>
      </div>
    </div>
  );
};

export default Modal;

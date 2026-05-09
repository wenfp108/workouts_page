import { useEffect } from 'react';
import styles from './style.module.css';

interface YearSummaryModalProps {
  year: string;
  onClose: () => void;
}

const YearSummaryModal = ({ year, onClose }: YearSummaryModalProps) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <img
          src={`/assets/year_summary_${year}.svg`}
          alt={`Year ${year} Summary`}
          className={styles.svg}
        />
      </div>
    </div>
  );
};

export default YearSummaryModal;

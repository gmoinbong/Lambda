import { FC, useState } from 'react';
import styles from '../Header.module.css';

interface Props { }

const options = [
  { value: "en", label: "EN", flag: <img src={"/assets/flags/flag1.png"} alt="UK Flag" className={styles.flagImage} /> },
  { value: "ua", label: "UA", flag: <img src={"/assets/flags/flag2.png"} alt="Ukraine Flag" className={styles.flagImage} /> },
  { value: "th", label: "TH", flag: <img src={"/assets/flags/flag3.png"} alt="Thailand Flag" className={styles.flagImage} /> },
  { value: "ma", label: "MA", flag: <img src={"/assets/flags/flag4.png"} alt="Morocco Flag" className={styles.flagImage} /> },
];

const LanguageSelector: FC<Props> = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectedOption} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption.label}</span>
        <span className={styles.arrow}>
          <img src={isOpen ? '/assets/arrows/arrow-up.png"' :  "/assets/arrows/arrow-down.png"} alt="arrow" />
        </span>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              <span className={styles.flag}>{option.flag}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

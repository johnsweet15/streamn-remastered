import { motion } from 'framer-motion';
import React, { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';
import { getVariants } from './input.anim';
import { REQUIRED_ERROR_MESSAGE } from '../../config/constants';

interface Validation {
  errorMessage: string;
  pattern: RegExp;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  validations?: Validation[];
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, validations, required, onChange }: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    if (validations && validations.length > 0) {
      validate(e.target.value);
    }
    if (required && e.target.value.length === 0) {
      setErrorMessage(REQUIRED_ERROR_MESSAGE);
    } else {
      setErrorMessage(null);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (isFocused: boolean): void => {
    setFocused(isFocused);
  };

  const validate = (input: string): void => {
    validations?.forEach(({ pattern, errorMessage }) => {
      // if input value fails validation
      if (!pattern.test(input)) {
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage(null);
      }
    });
  };

  return (
    <div className={`${styles.container}`}>
      <input
        aria-label={label}
        className={`${styles.input} ${errorMessage && styles.errorBorder}`}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onChange={handleChange}
      />
      <motion.p
        className={styles.span}
        variants={getVariants(focused, inputValue)}
        initial='initial'
        animate='animate'
      >
        {label}
        {required && <span className={styles.required}> *</span>}
      </motion.p>

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

Input.displayName = 'Input';

export default Input;

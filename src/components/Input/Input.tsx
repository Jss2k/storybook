import { useCallback, useRef } from 'react'
import classNames from './../utils/classNames';
// import { phone } from './../utils/masksTextInput';
import styles from './Input.module.scss';
// import { mask } from './../utils/masksTextInput'

const Input = (props: {
  title?: string,
  type: string,
  name: string,
  placeholder?: string,
  label?: string,
  value?: string,
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: () => void,
  textButton?: string,
  disabledButton?: boolean,
  error?: boolean,
  pattern?: string,
  // mask?: 'phone'
  prefix?: string
}) => {
  const active = props.disabledButton ? 'disabled' : 'active'
  const error = props.error ? 'error' : null
  const inputRef = useRef<HTMLInputElement | null>(null)
  // const handleKeyUp = useCallback(
  //   (e: React.FormEvent<HTMLInputElement>) => {
  //     if (props.mask === "phone") {
  //       phone(e)
  //     }

  //   },
  //   [props.mask]
  // );

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   mask(inputRef.current)
  // }

  return (
    <div className={styles.Input}>
      <p className={styles.inputTitle}>{props.title}</p>
      <div className={styles.inputWrap}>
        <input
          // onKeyUp={handleKeyUp}
          ref={inputRef}
          type={props.type}
          value={props.value}
          id={props.name}
          // pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
          placeholder="+7(___)___-__-__"
          onChange={props.handleChange}
        ></input>
      </div>
      <div className={styles.labelWrap}>
        <label htmlFor={props.name} className={styles[`${error}`]}>{props.label}</label>
        <button
          className={classNames(styles.textButton,styles[`${active}`])}
          onClick={props.onClick}
          disabled={props.disabledButton ? true : false}
          >
          <span>{props.textButton}</span>
        </button>
      </div>
    </div>
  );
}

export default Input;

import styles from './Input.module.scss'

const Input = (props: {
  title?: string,
  type: string,
  value?: string,
  name: string,
  label?: string,
  placeholder: string,
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,

}) => {
  return (
    <div className={styles.Input}>
      <p className={styles.inputTitle}>{props.title}</p>
      <div className={styles.inputWrap}>
        <input
          type={props.type}
          value={props.value}
          id={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        >
        </input>
      </div>
      <div className={styles.labelWrap}>
      <label htmlFor={props.name}>{props.label}</label>
      <button>{}</button>
      </div>


    </div>
  )
}

export default Input
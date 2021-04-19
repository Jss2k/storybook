import { CSSProperties, FormEvent, ReactNode } from 'react';
import classNames from './../utils/classNames';
import Loader from './../Loader/Loader';
import styles from './Button.module.scss';

type ButtonProps = {
  disabled?: boolean;
  children?: JSX.Element | string;
  icon?: ReactNode;
  loading?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: (e?: FormEvent) => void;
};

function Button(props: ButtonProps) {
  const { icon, loading, disabled, className, style, onClick } = props;

  const active = disabled ? 'disable' : 'active';
  const loader = loading ? <Loader /> : icon;

  return (
    <button
      className={classNames(styles.btn, styles[`btn-${active}`], styles[`${className}`])}
      style={style}
      onClick={onClick}
    >
      <span className={styles.icon}>{loader}</span>
      <span className={styles.text}>{props.children}</span>
    </button>
  );
}

export type { ButtonProps };
export default Button;

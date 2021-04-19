import styles from './../styles/util.module.scss';

function Loader() {
  return (
    <div className={styles.center}>
      <svg version="1.0" width="24px" height="24px" viewBox="0 0 128 128" xmlSpace="preserve">
        <g>
          <circle cx="20" cy="44" r="14" />
          <circle
            cx="20"
            cy="44"
            r="14"
            fill="#555555"
            strokeWidth="2"
            stroke="rgb(0,0,0)"
            transform="rotate(60,64,64)"
          />
          <circle
            cx="20"
            cy="44"
            r="14"
            fill="#949494"
            strokeWidth="2"
            stroke="rgb(0,0,0)"
            transform="rotate(120,64,64)"
          />
          <circle
            cx="20"
            cy="44"
            r="14"
            fill="#cccccc"
            strokeWidth="2"
            stroke="rgb(0,0,0)"
            transform="rotate(180,64,64)"
          />
          <circle
            cx="20"
            cy="44"
            r="14"
            fill="#e1e1e1"
            strokeWidth="2"
            stroke="rgb(0,0,0)"
            transform="rotate(240,64,64)"
          />
          <circle
            cx="20"
            cy="44"
            r="14"
            fill="#e1e1e1"
            strokeWidth="2"
            stroke="rgb(0,0,0)"
            transform="rotate(300,64,64)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
            calcMode="discrete"
            dur="1520ms"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
}
export default Loader;

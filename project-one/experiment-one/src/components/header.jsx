import styles from '../css/header.module.css'

export default function Header(props) {
    return (
        <div className={styles.header}>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}
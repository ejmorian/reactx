import styles from "../css/nav.module.css"

export default function Nav(props) {
    return (
        <div className={styles.nav}>
            <ul>
                <li>{props.menuOne}</li>
                <li>{props.menuTwo}</li>
                <li>{props.menuThree}</li>
            </ul>
        </div>
    )
}
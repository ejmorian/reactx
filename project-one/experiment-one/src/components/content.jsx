import styles from '../css/content.module.css'

export default function Content(props) {
    const skills = ['React.js', 'Javascript', 'CSS', 'HTML5']
    return (

        <div>
            <div className={styles.content}>
                <h2>Skills</h2>
                <div className={styles.list}>
                    {skills.map(skill => {
                        return (<div>
                            <h3>{skill}</h3>
                            <div className={styles.bar}>
                                <div className={styles.barLevel}> </div>
                            </div>
                        </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )

}
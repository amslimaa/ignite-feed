import styles from 'Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/amslimaa.png" alt="Amós Lima" />
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Amos Lima</strong>
                        <time dateTime="2022-11-03 12:25:05" title="3 de Novembro as 12:25h" >Cerca de 1h atras</time>
                    </div>                   
                </header>
            </div>
        </div>
    )
}
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img src="https://github.com/amslimaa.png"/>
          <div className={styles.authorInfo}>
            <strong>Amós Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime="2022-11-03 12:25:05" title="3 de Novembro as 12:25h" >Publicado ha 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return. O evento da Rocketseat. O nome do projeto  é DoctorCare 🚀</p>
        <p>👉{' '}<a href="">amos.dev/doctorcare</a> </p>
        <p> 
          <a href="">#novoProjeto</a>{' '} 
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a> 
        </p>

      </div>
    </article>
  );
}

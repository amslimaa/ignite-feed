
import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {

  const PublishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const PublishedDateFromNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={PublishedDateFormatted} >{PublishedDateFromNow}</time>

      </header>
      <div className={styles.content}>
        {content.map(content => {
          if (content.type === 'paragraph') {
            return <p>{content.content}</p>
          }
          if (content.type === 'link') {
            return <p><a href='#'>{content.content}</a></p>
          }
        })}
        <p>
          <a href="">#novoProjeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button type="submit">Publicar</button>

        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

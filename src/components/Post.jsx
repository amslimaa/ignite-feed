import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';


import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {

  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('')


  const PublishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const PublishedDateFromNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  function handleCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  function deleteComment(commentTodelete) {
    setComments(comments.filter((comment) => comment !== commentTodelete));
  }

  const isNewCommentEmpity = newCommentText.length <=0;
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

        <time dateTime={publishedAt.toISOString()} title={PublishedDateFormatted} >
          {PublishedDateFromNow}
        </time>

      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content} ><a href='#'>{line.content}</a></p>
          }
        })}
        <p>
          <a href="">#novoProjeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder='Deixe seu comentário'
          onChange={handleCommentChange}
          value={newCommentText}
          onInvalid={event => event.target.setCustomValidity('O campo não pode ficar vazio')}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpity} >Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}

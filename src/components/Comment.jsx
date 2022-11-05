
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/amslimaa.png" alt="Amós Lima" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Amos Lima</strong>
              <time
                dateTime="2022-11-03 12:25:05"
                title="3 de Novembro as 12:25h"
              >
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Amos, Parabens 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

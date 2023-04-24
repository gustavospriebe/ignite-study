import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import Avatar from "./Avatar";
import { useState } from "react";

export default function Comments({ comment, onSetComments }) {
    const [upVoteCount, setUpVoteCount] = useState(0);

    function deleteComment() {
        onSetComments((prevState) =>
            prevState.filter((value) => value !== comment)
        );
    }

    function handleUpVote() {
        setUpVoteCount((prevState) => prevState + 1);
    }

    return (
        <div className={styles.comments}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Priebe</strong>
                            <time title="21 de Abril" dateTime="2023-04-21">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            title="Deletar Comentário"
                            onClick={deleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{comment}</p>
                </div>

                <footer>
                    <button onClick={handleUpVote}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{upVoteCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

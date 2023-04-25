import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import Avatar from "./Avatar";
import { useState } from "react";

interface CommentsProps {
    comment: string;
    onDeleteComment: (comment: string) => void;
}

export default function Comments({ comment, onDeleteComment }: CommentsProps) {
    const [upVoteCount, setUpVoteCount] = useState(0);

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
                            onClick={() => onDeleteComment(comment)}
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

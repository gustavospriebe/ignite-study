import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Avatar from "./Avatar";
import Comments from "./Comments";
import styles from "./Post.module.css";
import { useState } from "react";

export default function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState("");

    console.log(new Date());

    function handleComment(e) {
        e.preventDefault();

        setComments((prevState) => [...prevState, newCommentText]);
        setNewCommentText("");
    }

    const publishedAtFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
    });

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                        alt={author.avatarUrl.split("/").at(-1)}
                    />

                    <div className={styles.info}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    dateTime={publishedAt.toISOString()}
                    title={publishedAtFormatted}
                >
                    Publicado à {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((line) =>
                    line.type === "paragraph" ? (
                        <p key={line.content}>{line.content}</p>
                    ) : (
                        <p key={line.content}>
                            <a href="#">{line.content}</a>
                        </p>
                    )
                )}
            </div>
            <form className={styles.commentForm} onSubmit={handleComment}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                    onChange={(e) => setNewCommentText(e.target.value)}
                    value={newCommentText}
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comments
                        key={comment}
                        comment={comment}
                        onSetComments={setComments}
                    />
                ))}
            </div>
        </article>
    );
}

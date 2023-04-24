import styles from "./Main.module.css";
import Post from "./Post";

// author: { avatar: "" , name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/gustavospriebe.png",
            name: "Gustavo Priebe",
            role: "Web Developer",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2023-04-24 12:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @Rocketseat",
        },
        content: [
            { type: "paragraph", content: "Opa" },
            {
                type: "paragraph",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit.",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2023-04-24 14:00:00"),
    },
];

export default function Main() {
    return (
        <main className={styles.main}>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />
            ))}
        </main>
    );
}

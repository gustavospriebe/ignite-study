import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(
                "https://api.github.com/users/gustavospriebe/repos"
            );
            const json = await response.json();

            setRepositories(json);
        };

        request();
    }, []);

    return (
        <>
            <h1>Lista de repositórios</h1>
            {repositories.map((repo) => (
                <RepositoryItem key={repo.name} repository={repo} />
            ))}
        </>
    );
}

export default RepositoryList;

function RepositoryItem({ repository }) {
    return (
        <>
            <h1>{repository.name}</h1>
            <h3>{repository.description}</h3>
            <a href={repository.html_url}>Click here</a>
        </>
    );
}

export default RepositoryItem;

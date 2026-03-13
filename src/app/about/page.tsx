export const dynamic = 'force-dynamic';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function AboutPage(){  //! async
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: {revalidate: 3600} });
    const repos: Post[] = await response.json();

    return (
      <>
        <h1>About Page!!</h1>

        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <div>{repo.title}</div>
            </li>
          ))}
        </ul>
      </>
    );

}
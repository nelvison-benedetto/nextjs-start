export const dynamic = 'force-dynamic';  //x caching

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function AboutPage(){  //! async
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', 
        { next: {revalidate: 3600} }  //si autoInvalida la cache dopo 1h, invece {cache:'no-store'} non utilizzerebbe proprio la cache quindi ogni fetch è direttamente una chiamata al backend/db
    );
    const repos: Post[] = await response.json();

    return (
      <>
        <h1>About Page!!</h1>

        <ul className="space-y-8">
          {repos.map((repo) => (
            <li key={repo.id} className="mb-4">
              <div>{repo.title}</div>
            </li>
          ))}
        </ul>
      </>
    );

}
//utilizza anche SUSPANNSE, se vuoi singoli fallback nella page, e.g.
/*
        <Suspense fallback={<BlogListSkeleton />}>
           <BlogList />  //renderizzazione ok
        </Suspense>
*/
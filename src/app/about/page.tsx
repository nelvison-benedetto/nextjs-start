import styles from "../../components/about.module.css";

export const dynamic = 'force-dynamic';  //x caching

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function AboutPage({searchParams} : {searchParams: any}){  //! async
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        { next: {revalidate: 3600} }  //si autoInvalida la cache dopo 1h, invece {cache:'no-store'} non utilizzerebbe proprio la cache quindi ogni fetch è direttamente una chiamata al backend/db
    );
    const repos: Post[] = await response.json();

    if(searchParams.error) throw new Error('cathched error!!'); //!!

    return (
      <>
        <h1 className="mylink">About Page!!</h1>

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
//!!utilizza anche ERRORBOUNDARY(from plugin)+SUSPANSE, per pro TOP TOP!!
/*
import ErrorBoundary from "react-error-boundary";
    <ErrorBoundary fallback={<div>error catched during fetching data!!</div>}>
        <Suspense fallback={<BlogListSkeleton />}>
           <BlogList />  //renderizzazione ok
        </Suspense>
    </ErrorBoundary>
*/
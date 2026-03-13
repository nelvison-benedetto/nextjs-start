export default function Loading() {
  // Define the Loading UI here
  //return <div>Loading...</div>

    return (
      <>
        <h1>About Page!!</h1>

        <ul className="space-y-8">
          {Array(3).fill(0).map((_element, index) => (
            <li key={index} className="mb-4">
                <div className="w-full h-24 animate-pulse bg-neutral-100 dark:bg-neutral-700"></div>
            </li>
          ))}
        </ul>
      </>
    );

}
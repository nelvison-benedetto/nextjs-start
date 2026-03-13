export default function AboutLayout({children} : {children: React.ReactNode}){
    return(
        <>
            <div>{children}</div>
            <div className="mt-8">
                <h2>you can also like</h2>
                <ul>
                    <li>first post blog</li>
                    <li>second post blog</li>
                </ul>
            </div>
        </>
    );
}
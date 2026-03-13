export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    return (
        <>
            <p>hello from dynamic blog page! the slug is {slug}</p>
        </>
    );
}
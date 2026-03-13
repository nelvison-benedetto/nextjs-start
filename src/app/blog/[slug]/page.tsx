export default function BlogPage({ params }: any) {
    return (
        <>
            <p>hello from dynamic blog page! {params.slug}</p>
        </>
    );
}
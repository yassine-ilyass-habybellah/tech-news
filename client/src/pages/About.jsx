export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About TechNews Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to TechNews – your go-to blog created by tech enthusiasts, for tech enthusiasts! We’re passionate about exploring the latest in technology, sharing insights, and keeping you updated on the rapidly evolving tech landscape. From breaking tech news to in-depth articles on emerging trends, our goal is to provide a reliable source of information and inspiration.
            </p>

            <p>
            Whether you're interested in advancements in AI, software development, cybersecurity, gadgets, or anything tech-related, Tech News is here to fuel your curiosity. Join us as we delve into the world of technology, one post at a time!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

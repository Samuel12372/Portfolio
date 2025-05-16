const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="min-h-screen scroll-mt-16 px-6 md:px-16 py-16 text-gray-400">
        <div className="max-w-xl mx-auto">

          <p className="text-lg leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-white">Samuel Knowles</span>, a final year software engineering student at Sheffield Hallam University with a passion for software development. With graduation approaching, I'm looking for an innovative and exciting role in software engineering where I can continue to grow and develop my skillset.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            My journey into programming began with <span className="text-white font-semibold">C#</span> and <span className="text-white font-semibold">JavaScript</span>, but quickly expanded across a wide range of languages, frameworks, and libraries. Some of these include:
            <span className="text-white font-semibold"> React</span>, 
            <span className="text-white font-semibold"> Node</span>, 
            <span className="text-white font-semibold"> HTML</span>, 
            <span className="text-white font-semibold"> CSS</span>, 
            <span className="text-white font-semibold"> SQL</span>, and 
            <span className="text-white font-semibold"> .NET</span>.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            This diverse toolkit has enabled me to develop a variety of projects, from full-stack web applications to building games in{' '} 
            <span className="text-white font-semibold">Unity</span>
            . I've consistently applied software development methodologies, like{' '} 
            <span className="text-white font-semibold">agile</span>
            , to manage projects efficiently through incremental development, collaboration and continuous improvement. 
            I'm always on the lookout for new challenges to sharpen my skills and explore new technologies.
          </p>

          <p className="text-lg leading-relaxed">
            Outside of programming, you’ll probably find me at the tennis club, hiking in the Lakes, or running with friends.
          </p>

        </div>
      </section>
    </div>
  );
};

export default About;

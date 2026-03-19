const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="min-h-screen scroll-mt-16 px-6 md:px-16 py-20 md:py-50 text-gray-400 text-center xl:text-left">
        <div className="max-w-xl mx-auto">

          <p className="text-lg leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-white">Samuel Knowles</span>,A First Class Honours Software Engineer from Sheffield Hallam University.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            My journey into programming began with <span className="text-white font-semibold">C#</span> and <span className="text-white font-semibold">JavaScript</span>, but quickly expanded across a wide range of languages, frameworks, and libraries. Some of these include:
            <span className="text-white font-semibold"> React</span>,
            <span className="text-white font-semibold"> TypeScript</span>, and 
            <span className="text-white font-semibold"> Next.js</span>.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Currently I am working for ProperJob web-based application that will actively support the next generation of property professionals onwards in their careers through a direct and digital networking process, whilst providing small-medium sized property companies with a cost-effective and data-driven solution to hiring. 
          </p>

          <p className="text-lg leading-relaxed">
            However, I am now looking for a new opportunity where I can continue to grow as a software engineer and contribute to forfulling projects within an experienced team.
          </p>

        </div>
      </section>
    </div>
  );
};

export default About;

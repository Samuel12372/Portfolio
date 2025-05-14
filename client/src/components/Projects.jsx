const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-16 px-6 md:px-16 pt-1 text-white"
    >
      <div className="max-w-4xl mx-auto">
        
        
        {/* CodeClash */}
        <div className="space-y-6">
          <a
            href="https://quiz-project-frontend-dyul.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg gap-6 items-start"
            >
            {/* Image on the left */}
            <img
                src="../../public/CodeClash.png"
                alt="CodeClash Website"
                className="w-50  object-contain rounded-md"
            />

            {/* Text content */}
            <div>
                <h3 className="text-2xl font-semibold text-white mb-2">CodeClash</h3>
                <p className="text-gray-400">
                CodeClash is a real-time gamified quiz platform where users compete in live coding-based challenges.
                </p>
                
            </div>
            </a>


            {/* 3Squared Train Tracker */}
            <a
            href="https://your-link-to-train-tracker.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg flex gap-6 items-start"
            >
            <img
            src="../../public/3Squared.png"
            alt="3Squared Train Tracker"
            className="w-50  object-contain rounded-md"
            />
            <div>
            <h3 className="text-2xl font-semibold text-white mb-2">3Squared Train Tracker</h3>
            <p className="text-gray-400">
                A real-time train monitoring tool built for tracking and visualizing live train movements across the UK.
            </p>
            </div>
            </a>

            {/* Dungeon Crawler */}
            <a
            href="https://your-link-to-dungeon-crawler.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg"
            >
            <h3 className="text-2xl font-semibold text-white mb-2">Depths of the Dungeon</h3>
            <p className="text-gray-400">
                A retro-style dungeon crawler game where players explore procedurally generated levels and battle monsters.
            </p>
            </a>

            {/* Library Management System */}
            <a
            href="https://your-link-to-library-system.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg"
            >
            <h3 className="text-2xl font-semibold text-white mb-2">Library Management System</h3>
            <p className="text-gray-400">
                A web-based tool for managing books, borrowers, and transactions efficiently in academic or public libraries.
            </p>
            </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;

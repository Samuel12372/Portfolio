// ...existing code...
const Projects = () => {

  
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-1 px-6 md:px-16 pt-10 text-white"
    >
      <div className="max-w-4xl mx-auto space-y-5">
        {/* properJob */}
        <div className="flex flex-col lg:flex-row bg-slate-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg gap-6 items-start">
         <img
            src="/properjob.png"
            alt="proper job website"
            className="w-full max-w-sm lg:max-w-[10rem] object-contain rounded-md mx-auto lg:mx-0"
          />
          <div className="flex flex-col justify-between w-full text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-semibold  text-white mb-2">ProperJob</h3>
              <p className="text-gray-400 mb-4">
                I am currently working on a web-based application that will actively support the next generation of property professionals onwards in their careers through a direct and digital networking process, whilst providing small-medium sized property companies with a cost-effective and data-driven solution to hiring. Built with{' '}
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  TypeScript
                </a>,{' '}
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Next.js
                </a>,{' '}
                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  PostgreSQL
                </a>, and{' '}
                <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Supabase
                </a>.
              </p>

            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://properjob.io/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition">Web</a>
              <a href="https://www.linkedin.com/company/properjob-io/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* CodeClash */}
        <div className="flex flex-col lg:flex-row bg-slate-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg gap-6 items-start">
         <img
            src="/CodeClash.png"
            alt="CodeClash Website"
            className="w-full max-w-sm lg:max-w-[10rem] object-contain rounded-md mx-auto lg:mx-0"
          />
          <div className="flex flex-col justify-between w-full text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-semibold  text-white mb-2">CodeClash</h3>
              <p className="text-gray-400 mb-4">
                CodeClash is a real-time gamified quiz platform where users compete in live coding-based quizzes. Built using the{' '}
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  MongoDB
                </a>,{' '}
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500 ">
                  Express
                </a>,{' '}
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  React
                </a>, and{' '}
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Node.js
                </a>{' '}
                stack ( 
                <a href="https://www.mongodb.com/resources/languages/mern-stack" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  MERN
                </a>), it also utilizes{' '}
                <a href="https://socket.io/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Socket.IO
                </a>{' '}
                for real-time communication between users. The platform was designed as part of a study exploring the impact of{' '}
                <a href="https://www.biworldwide.com/gamification/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  gamification
                </a>{' '}
                on student engagement in computing education.
              </p>

            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://quiz-project-frontend-dyul.onrender.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition">Web</a>
              <a href="https://github.com/Samuel12372/Quiz-Project/tree/dev" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition">Code</a>
            </div>
          </div>
        </div>


        {/* 3Squared Train Tracker */}
        <div className="flex flex-col lg:flex-row bg-slate-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg gap-6 items-start">
          <img
            src="/3Squared.png"
            alt="3Squared Train Tracker"
            className="w-full max-w-sm lg:max-w-[10rem] object-contain rounded-md mx-auto lg:mx-0"
          />
          <div className="flex flex-col justify-between w-full text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">3Squared Train Tracker</h3>
              <p className="text-gray-400 mb-4">
                An interactive train tracking application built for{' '}  
                <a
                  href="https://3Squared.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-500"
                >
                  3Squared
                </a>.{' '}
                This application uses a provided API to follow the real-time progress of freight trains during their journey. 
                Developed with a team deploying{' '}
                <a
                  href="https://www.geeksforgeeks.org/software-engineering-agile-software-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-500"
                >
                  agile
                </a>{' '}
                methodologies, including two sprint weeks for iterative development. 
                Built using{' '}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-500"
                >
                  React
                </a>,{' '}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-500"
                >
                  Tailwind CSS
                </a>,{' '}
                <a
                  href="https://leafletjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-500"
                >
                  Leaflet
                </a>, and{' '}
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-500"
                >
                  Node.js
                </a>.
              </p>
            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://youtu.be/-uEVk5DCFc4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition"
              >
                Demo
              </a>
              <a
                href="https://github.com/Samuel12372/3Squared-map"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition"
              >
                Code
              </a>
            </div>
          </div>
        </div>


        {/* Depths of the Dungeon */}
        <div className="flex flex-col lg:flex-row bg-slate-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg gap-6 items-start">
          <img src="/DepthsOfDungeon.png" alt="Depths of the Dungeon" className="w-full max-w-sm lg:max-w-[10rem] object-contain rounded-md mx-auto lg:mx-0" />
          <div className="flex flex-col justify-between w-full text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-semibold  text-white mb-2">Depths of the Dungeon</h3>
              <p className="text-gray-400 mb-4">
                An indie Dungeon crawler created using the{' '}
                <a
                href="https://unity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-gray-500"
              >
                Unity
              </a>{' '}
                 and{' '} 
              <a
                href="https://dotnet.microsoft.com/en-us/languages/csharp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-gray-500"
              >
                C#
              </a>.{' '} 
                I designed levels for the game in the unity engine, used sprites found online and coded scripts to add functionality and create a working game. 
              </p>
            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://youtu.be/rnY3MqSu-Tw" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition">Demo</a>
              <a href="https://github.com/Samuel12372/DungeonCrawler" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition">Code</a>
            </div>
          </div>
        </div>

        
        {/* Library Management System */}
        <div className="flex flex-col lg:flex-row bg-slate-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 p-6 rounded-lg gap-6 items-start">
          <img
            src="/AML.png"
            alt="Library Management System"
            className="w-full max-w-sm lg:max-w-[10rem] object-contain rounded-md mx-auto lg:mx-0"
          />
          <div className="flex flex-col justify-between w-full text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Library Management System</h3>
              <p className="text-gray-400 mb-4">
                A library management system designed for managing books and transactions for a public library. Built using the{' '}
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  MongoDB
                </a>,{' '}
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Express
                </a>,{' '}
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  React
                </a>, and{' '}
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Node.js
                </a>{' '}
                stack (
                <a href="https://www.mongodb.com/resources/languages/mern-stack" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  MERN
                </a>), following a{' '}
                <a href="https://www.ibm.com/think/topics/three-tier-architecture" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  3-tier architecture
                </a>{' '}
                style and an{' '}
                <a href="https://www.geeksforgeeks.org/mvc-design-pattern/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  MVC
                </a>{' '}
                pattern design. I worked independently on creating the backend, developing a REST API and connecting it with the front-end and a MongoDB collection to display thousands of books and users. Revisited this project later on to add security features such as{' '}
                <a href="https://www.imperva.com/learn/data-security/role-based-access-control-rbac/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  RBAC
                </a>,{' '}
                <a href="https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Rate-Limiting
                </a>, and{' '}
                <a href="https://www.computerhope.com/jargon/a/accolock.htm" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-gray-500">
                  Account Lockout
                </a>.
              </p>
            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://youtu.be/PjJ8NoVuHs0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition"
              >
                Demo
              </a>
              <a
                href="https://github.com/Samuel12372/AML-system"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition"
              >
                Code
              </a>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Projects;
// ...existing code...
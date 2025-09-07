import Link from "next/link";

type WallOfFameEntry = {
  name: string;
  gym?: string;
  location: string;
  date: string;
};

const attempts = 12;

const wallOfFameData: WallOfFameEntry[] = [
  {
    name: "Big Sam",
    gym: "CrossFit Fixus",
    location: "Greater Manchester, UK",
    date: "2024-09-07",
  },
  {
    name: "Alan Shaw",
    gym: "CrossFit Fixus",
    location: "Greater Manchester, UK",
    date: "2024-09-07",
  },
  {
    name: "Kieran Leith",
    gym: "CrossFit Fixus",
    location: "Greater Manchester, UK",
    date: "2024-09-07",
  },
];

const honourableMentions = [
  // {
  //   name: "Jamie Townley",
  //   description:
  //     "Drank the drink but palm contact stole the spot from the wall of fame",
  //   gym: "CrossFit Fixus",
  //   location: "Greater Manchester, UK",
  //   date: "2024-09-07",
  // },
];

export default function WallOfFame() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Back to Home CTA */}
      <div className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            🏆 Wall of Fame
          </h1>
          <p className="text-xl text-gray-300">
            The elite challengers who conquered The Heavy Mug Challenge! 🌟
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {wallOfFameData.length}
            </div>
            <div className="text-gray-300">🏆 Champions</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-3xl font-bold text-yellow-400 mb-2 flex items-center justify-center">
              <span className="mr-2">💪</span>
              {}
              {attempts}
            </div>
            <div className="text-gray-300">Attempts</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {attempts > 0
                ? `${Math.round((wallOfFameData.length / attempts) * 100)}%`
                : "0%"}
            </div>
            <div className="text-gray-300">🎯 Success Rate</div>
          </div>
        </div>

        {/* Champions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wallOfFameData.map((champion, index) => (
            <div
              key={index.toString()}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {champion.name}
                </h3>
                <p className="text-yellow-400 font-semibold">
                  {champion.gym ? champion.gym : "No gym"}
                </p>
                <p className="text-gray-400 text-sm">{champion.location}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">📅 Date:</span>
                  <span className="text-white">
                    {(() => {
                      const d = new Date(champion.date);
                      const day = String(d.getDate()).padStart(2, "0");
                      const month = String(d.getMonth() + 1).padStart(2, "0");
                      const year = d.getFullYear();
                      return `${day}/${month}/${year}`;
                    })()}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-center">
                  <span className="text-yellow-400 text-sm font-semibold">
                    🏆 CHAMPION
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honourable Mentions Grid */}
        <h2 className="text-2xl font-bold text-white mb-4 mt-12">
          Honourable Mentions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {honourableMentions.map((mention, index) => (
            <div
              key={index.toString()}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 shadow-lg"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">{mention.name}</h3>
              </div>
              <div className="text-white text-sm">{mention.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-lg p-8 hover:scale-105 transition-all">
            <h2 className="text-3xl font-bold text-white mb-4">
              🚀 Ready to Join the Elite?
            </h2>
            <p className="text-white mb-6 text-lg">
              Take on The Heavy Mug Challenge and earn your place among the
              legends! 💪
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rules"
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                📋 Want to attempt the challenge?
              </Link>
              <a
                href="https://instagram.com/temperedstrength"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
                aria-label="Visit TemperedStrength on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <span>
                  🎬 Contact us on{" "}
                  <span className="font-semibold">Instagram</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            🏠 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

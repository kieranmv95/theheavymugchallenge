import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <Image
          src="/tslogo.svg"
          className="w-[80px] h-auto mx-auto mb-3"
          alt="Heavy Mug Challenge Badge"
          width={263}
          height={78}
        />
        <h1 className="text-3xl font-extrabold text-white mb-4 text-center">
          THE HEAVY MUG CHALLENGE
        </h1>
      </div>

      <div className="relative overflow-hidden max-w-4xl mx-auto">
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-gray-950 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/fire.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-gray-950 to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-gray-950 z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <Image
                className="w-[300px] h-auto md:w-[350px] lg:w-[400px] lg:w-[400px]"
                src="/boom.png"
                alt="Heavy Mug Challenge Badge"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-4 text-center">
        <div className="flex justify-center mb-6">
          <Link
            href="/wall-of-fame"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 border border-gray-600 text-center"
          >
            Wall of Fame
          </Link>
        </div>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          🏋️ Lift the worlds heaviest mug without spilling a single drop! Only
          the strongest and most skilled make it to the Wall of Fame! 💪
        </p>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              🚀 How It Works 🚀
            </h2>
            <p className="text-xl text-gray-300">
              The ultimate test of strength and precision!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4 animate-pulse">🏋️</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Lift the Mug
              </h3>
              <p className="text-gray-300">
                Attempt to lift the 10kg heavy mug from the ground!
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4 animate-pulse">💧</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Don&apos;t spill a drop
              </h3>
              <p className="text-gray-300">
                Keep the mug steady without spilling any contents!
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4 animate-pulse">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Join the Elite
              </h3>
              <p className="text-gray-300">
                Earn your place on the prestigious Wall of Fame!
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-gray-950 rounded-lg py-24 hover:scale-105 transition-all px-4 sm:px-8">
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
      </div>
    </div>
  );
}

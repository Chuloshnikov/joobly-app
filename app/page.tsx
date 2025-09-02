import Link from "next/link";
import jobSeekers from "@/public/images/job-seekers.svg";
import jobPosters from "@/public/images/job-posters.svg";
import Button from "@/lib/components/button/button";
import Footer from "@/app/footer";
import { Metadata } from "next";
import AnimatedImage from "@/lib/components/home/animatedImage/AnimateImage"; // импортируем новый компонент

export const metadata: Metadata = {
  title: {
    default: "Joobly.cz – Find Multilingual Jobs in Prague and Czechia",
    template: "%s | Joobly.cz",
  },
  description:
    "Find multilingual jobs in Prague and across Czechia. English, German, French, and more. We connect expats with top employers.",
};

const Home = () => {
  return (
    <section className="flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Job Seekers Section */}
        <div className="flex-1 bg-gradient-to-tr from-blue-400/20 via-indigo-500/20 to-purple-600/20 py-12 flex justify-center items-center">
          <div className="max-w-[449px] w-full flex flex-col items-center text-center">
            <p className="text-lg font-bold mb-2">FOR JOB SEEKERS</p>
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              Get work and get paid in Czech Republic
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Find steady work, near you. Any industry. Any experience level. Easy.
            </p>
            <Link href="/jobs">
              <Button
                style={{ minHeight: "64px" }}
                className="rounded-[18px] bg-purple-600 text-white w-[217px] h-[64px] mt-4 hover:opacity-80"
              >
                Get a job now
              </Button>
            </Link>
            <div className="relative w-full max-w-[496px] h-[496px] mt-6 hidden md:block">
              <AnimatedImage
                src={jobSeekers}
                alt="person"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Job Posters Section */}
        <div className="flex-1 bg-gradient-to-r from-lime-200 to-green-300 py-12 flex justify-center items-center">
          <div className="max-w-[449px] w-full flex flex-col items-center text-center">
            <p className="text-lg font-bold mb-2">FOR COMPANIES</p>
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              Hire reliable and trusted workers now
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Drive candidates to your career site and convert them into applicants.
            </p>
            <Link href="/post-job-info">
              <Button
                style={{ minHeight: "64px" }}
                className="rounded-[18px] bg-emerald-800 text-white w-[217px] h-[64px] mt-4 hover:opacity-80"
              >
                Post Your Job
              </Button>
            </Link>
            <div className="relative w-full max-w-[496px] h-[496px] mt-6 hidden md:block">
              <AnimatedImage
                src={jobPosters}
                alt="person"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden mdl:block z-50">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
import { Briefcase, Target, Signature, Rocket } from 'lucide-react';
import { BriefcaseIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

import { Safari } from "@/components/magicui/safari";
import GetStartedBtn from '@/components/buttons/getStartedBtn';
import TextHolder from '@/components/Animation/textHolder';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <section
        className="h-screen flex flex-col items-center justify-center w-full relative overflow-hidden grainy-bg"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `
    linear-gradient(to bottom right, rgba(245, 245, 255, 0.9), rgba(255, 255, 255, 0.9), rgba(240, 247, 255, 0.9)),
    url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.2'/></svg>")
  `,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-4 font-blunext">Work am i</h1>
          <div className="text-3xl sm:text-4xl md:text-6xl max-w-full md:max-w-[890px] font-[700] text-black font-sf-pro-bold leading-tight md:leading-[1.05] flex flex-wrap justify-center items-center gap-2 text-center">
            <span>The all-in-one</span>
            <Briefcase className="inline w-8 h-8 md:w-12 md:h-12 text-primary mx-1" />
            <span>job search tool</span>
            <span>to help you land job</span>
            <Target className="inline w-8 h-8 md:w-12 md:h-12 text-primary mx-1" />
            <span>smarter, faster</span>
            <Rocket className="inline w-8 h-8 md:w-12 md:h-12 text-primary mx-1" />
          </div>
        </div> */}

        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          {/* Motto First */}
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-4">
            Your career, your workplace
          </p>

          {/* Brand Name */}
          <h1 className="text-5xl md:text-6xl font-blunext mb-6 text-primary">
            Workami
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10">
            Smarter, faster, job search tool, all in one place.
          </p>

          {/* Optional Icons Below, Less Prominent */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-5 h-5 text-primary" />
              <span>Centralized Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Smarter Applications</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex items-center justify-center">
            <GetStartedBtn />
          </div>
        </div>

      </section>

      <section className="px-4 py-8 md:p-10 flex flex-col items-center w-full bg-white">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl  mb-2 text-center text-primary font-crimson-text">
            Why <span className="text-black">Work am i?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mt-2">
            Discover how our platform streamlines your job search, making it smarter, faster, and more effective.
          </p>
        </div>
        <Safari
          className="w-full max-w-full sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] h-auto"
          url="https://www.example.com"
          videoSrc='https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4'
        />
      </section>
      <TextHolder>
        Workami brings your resume, job tracker, and AI feedback together — all in one calm, focused space.
      </TextHolder>
      <br />
      <TextHolder>
        No more tabs or chaos. Just a single, clean interface to manage your entire job search.
      </TextHolder>
      <br />

      <TextHolder>
        Tailor resumes, decode job descriptions, and track interviews — effortlessly, all in one place.
      </TextHolder>
      <br />

      <TextHolder>
        Built for clarity and momentum. Workami keeps you organized, confident, and ready to land the role.
      </TextHolder>

      {/* <TextHolder>
        No clutter. Just clarity.
      </TextHolder> */}

      <div className="flex flex-col items-center justify-center m-10">
        <div className="flex items-center justify-center">
          <GetStartedBtn />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import content from "/public/content.png";
import script from "/public/script.png";
import outdoor from "/public/outdoor.png";
import writting from "/public/writting.png";
import tv from "/public/tv.png";
import podcast from "/public/podcast.png";
import production from "/public/production.png";
import visual from "/public/visual.png";
import film from "/public/film.png";
import docu from "/public/docu.png";

const Ourservice = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-center w-full text-black">
        <p>Our service</p>
      </div>
      <p className="absolute text-2xl mt-[8%] font-bold underline max-sm:ml-10 ml-[20%]">CONTENT</p>
      <div className="w-[65%] ml-[17.5%] max-sm:w-[80%] max-sm:ml-[10%] max-sm:block mt-20 grid gap-3 grid-cols-3">
        <div className="rounded-xl max-sm:mt-12 cursor-pointer hover:bg-black transition-all duration-300 overflow-hidden h-[20rem] mt-20 bg-gray-100">
          <Image src={content} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Content Conceptualization and Development
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[20rem] mt-10 bg-gray-100">
          <Image src={script} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Scripted Content - Film, Tv Series, Mini-series, Talk shows
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[20rem] bg-gray-100">
          <Image src={outdoor} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Unscripted Content - Reality Tv Shows, Documentaries, Docu-series
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[20rem] bg-gray-100">
          <Image src={writting} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Book Writting, - Autobiographies, Fictional Books, Coffe Books,
            Historical Memoirs.
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[20rem] mt-[-2.5rem] bg-gray-100">
          <Image src={tv} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Development of TV and Radio Commercials
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[20rem] mt-[-4.9rem] bg-gray-100">
          <Image src={podcast} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Podcasts/Vodcasts
          </p>
        </div>
      </div>
      <p className=" text-2xl mt-[8%] max-sm:mt-36 max-sm:ml-10 font-bold underline ml-[20%]">PRODUCTION</p>
      <div className="w-[65%] max-sm:w-[80%] max-sm:ml-[10%] h-[70vh] max-sm:block ml-[17.5%] mt-20 grid gap-3 grid-cols-4">
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300 overflow-hidden h-[15rem] bg-gray-100">
          <Image src={production} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Film/Movie/TV Production
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[15rem] mt-[-1.5rem] bg-gray-100">
          <Image src={film} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
            Radio/TV Adverts Production
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[15rem] mt-[-2.5rem] bg-gray-100">
          <Image src={docu} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
           Documentaries
          </p>
        </div>
        <div className="rounded-xl max-sm:mt-6 cursor-pointer hover:bg-black transition-all duration-300  overflow-hidden h-[15rem] mt-[-3.5rem] bg-gray-100">
          <Image src={visual} alt="" className="object-cover h-[40%] w-full" />
          <p className="p-4 text-red-400">
           Visual Post Production
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;

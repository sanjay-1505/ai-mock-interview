import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import  Container  from "@/components/Container";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { MarqueImg } from "@/components/MarqueImg";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-pink-100">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className=" text-outline font-extrabold md:text-8xl text-purple-600">
              AI POWERED
            </span>
            <span className="text-gray-700 font-extrabold">
              - A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          
        </div>

        

        <div className="w-full mt-4 rounded-xl bg-purple-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-purple-800 font-semibold">Developer</h2>
           

            <Button className="mt-3 bg-purple-600 hover:bg-purple-700 text-white">
              Generate <Sparkles />
            </Button>
          </div>
        </div>
      </Container>

      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-purple-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-gray-600">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4 bg-purple-600 hover:bg-purple-700 text-white">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

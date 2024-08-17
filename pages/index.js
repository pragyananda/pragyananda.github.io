import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import Image from "next/image";
import { NextWorkCard } from "../components/WorkCard/main";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} `}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 w-5/6">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10 flex gap-6 ">
          <div className="mt-5">
            <h2
              ref={textOne}
              className="text-xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full  font-bold"
            >
              {data.headerTaglineOne}
            </h2>
            <h2
              ref={textTwo}
              className="text-xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full  font-bold"
            >
              {data.headerTaglineTwo}
            </h2>
            <h2
              ref={textThree}
              className="text-xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full  font-bold"
            >
              {data.headerTaglineThree}
            </h2>
            <div className="flex gap-10 mt-5">
              <Button type="primary">Work with me</Button>
              <Link href="/resume">
                <Button type="outlined">Hire me</Button>
              </Link>
            </div>
            <Socials className="mt-2 laptop:mt-5" />
          </div>
          <div className="will-change: transform, opacity; opacity: 1; transform: translateX(0%) translateY(0px) scale(1) translateZ(0px);">
            <div className="relative flex h-60 w-60 items-center justify-start tablet:h-[300px] tablet:w-[300px] desktop:h-[560px] desktop:w-[450px]">
              <div className="absolute bottom-0 left-5 top-5 hidden h-full w-full rounded-3xl bg-[#A5B4FC]; desktop:block">
              </div>
              <div className="absolute -left-[15px] -top-[15px] block h-[270px] w-[270px] rounded-full bg-[#A5B4FC]; tablet:h-[330px] tablet:w-[330px] desktop:hidden">
              </div>
              <div className="absolute -left-[10px] -top-[10px] block h-[260px] w-[260px] rounded-full bg-[#A5B4FC]; tablet:h-[320px] tablet:w-[320px] desktop:hidden">
              </div>
              <div className="absolute -left-[5px] -top-[5px] block h-[250px] w-[250px] rounded-full bg-[#A5B4FC]; tablet:h-[310px] tablet:w-[310px] desktop:hidden">
              </div>
              <Image
                src="/images/pragyanand.jpg"
                alt="Hero Image"
                width={450}
                height={560}
                className="absolute left-0 top-0 rounded-full drop-shadow-1 dark:drop-shadow-none desktop:rounded-3xl"
              />
            </div>
          </div>

        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              // <WorkCard
              //   key={project.id}
              //   img={project.imageSrc}
              //   name={project.title}
              //   description={project.description}
              //   onClick={() => window.open(project.url)}
              // />
              <NextWorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

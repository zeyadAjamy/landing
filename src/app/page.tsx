"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => (
  <div className="relative flex items-center justify-center w-full p-0 m-0 min-h-screen bg-hero-bg bg-cover bg-center">
    <Image
      src="/colored-pattern.png"
      alt="decoration"
      height={300}
      width={300}
      className="hidden md:block h-[300px] w-auto absolute bottom-0 right-[30px]"
    />
    <div className="w-fit h-fit font-[Raleway] font-[700] text-[white] text-6xl text-center">
      <span className="block"> We are </span>
      <div className="bg-gradient-to-t p-[5px] from-[#8093FF] to-[#66FFE5] bg-clip-text text-[transparent]">
        Revolutionizing Healthcare
      </div>
      <span className="block"> Through AI Innovation. </span>
    </div>
    <ScrollLink to="about" smooth={true} duration={500} className="absolute m-auto bottom-[50px]">
      <Image
        src="/hero-arrow.png"
        alt="Find out more"
        quality={100}
        width={12}
        height={74}
        className="h-[auto] cursor-pointer animate-bounce"
      />
    </ScrollLink>
  </div>
);

const Program = () => {
  return (
    <div id="about" className="relative mt-[20px] w-full min-h-[55vh] my-[100px]">
      <Image
        src="/about-decoration.png"
        alt="about decoration"
        height={300}
        width={100}
        className="absolute right-0 bottom-0"
      />
      <div className="relative lg:w-[70%] md:w-[80%] sm:w-full m-auto">
        <Image
          src="/about-image.png"
          alt="About Images"
          quality={100}
          height={1000}
          width={1000}
          className="z-[1] w-[100%] m-auto"
        />
        <div className="absolute lg:-bottom-[80px] md:left-0 sm:right-0 px-[40px] w-full flex flex-col lg:gap-[40px] md:gap-[20px]">
          <span className="block md:text-6xl sm:text-4xl font-[Raleway] text-[white] leading-[60px] font-[400]">
            Better Healthcare, <br /> Smart, Accessible, Unified.
          </span>
          <p className="lg:w-2/3 md:w-full text-[white] font-[Raleway] my-[30px] text-[15px] font-extralight">
            [Your Startup Name] is an AI-based healthcare startup that aims to revolutionize the way people access
            healthcare services. From disease detection to doctor appointments and a wide range of medical services,
            we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

const Invesment = () => (
  <div className="lg:w-[70%] md:w-[80%] sm:w-full m-auto text-[white] font-[Raleway] flex flex-row p-[30px] my-[100px]">
    <span className="w-[50%] md:text-5xl sm:text-4xl font-[400]">We reduce your healthcare cost by 40%.</span>
    <p className="w-[48%] md:pl-[20px] sm:pl-0text-md font-[200]">
      At [Your Startup Name], we are dedicated to delivering seamless healthcare services that keep you informed about
      your health effortlessly. Our streamlined approach not only saves you valuable time and money but also empowers
      you to take control of your well-being. With our innovative solutions, we aim to reduce healthcare expenses by an
      impressive 40% while making a significant impact on early disease detection, ultimately saving lives.
    </p>
  </div>
);

const Funding = () => (
  <div className="relative flex flex-col gap-[30px] w-full md:p-0 sm:p-[30px] mb-[100px]">
    <Image
      src="/funding-decoration.png"
      alt="about decoration"
      height={200}
      width={80}
      className="absolute left-0 -top-[150px] z-[1]"
    />

    <div className="lg:w-[70%] md:w-[80%] sm:w-full m-auto text-[white] font-[Raleway] grid md:grid-cols-2 sm:grid-cols-1 gap-[40px] items-center">
      <Image src="/funding-2.png" alt="funding image" height={1000} width={1000} className="w-full h-auto" />
      <div>
        <span className="block md:text-5xl sm:text-4xl font-[400]">Young Minds, Experience hand & Strong Command.</span>
        <p className="text-[15px] mt-[20px] font-[200]">
          Our dynamic team comprises diverse developers with extensive experience ranging from startups to established
          companies. With a strong backing from Russian accelerators, we are driven by a shared vision to make a
          difference in the healthcare industry. Our goal is to create innovative solutions and revolutionize the way
          healthcare services are delivered, improving the lives of individuals.
        </p>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const portfolio = [
    { payload: "50+", title: "Doctors" },
    { payload: "2+", title: "Clinics" },
    { payload: "1", title: "City" },
  ];
  return (
    <div className="relative w-full mb-[100px] p-[30px]">
      <div className="lg:w-[70%] md:w-[80%] sm:w-full m-auto text-[white] font-[Raleway]">
        <Image src="/line.png" alt="line" width={2000} height={10} className="w-full h-auto" />
        <span className="block md:text-5xl sm:text-4xl font-[400] my-[40px]"> Our Portfolio</span>
        <div className="w-full md:gap-[50px] sm:gap-[20px] grid md:grid-cols-3 sm:grid-cols-1">
          {portfolio.map((p, i) => (
            <div
              key={i}
              className="bg-c2 rounded-sm flex flex-col gap-[15px] items-center justify-center p-[50px] h-fit ease-in-out duration-300 hover:scale-[1.05]"
            >
              <div className="text-5xl font-[500] bg-gradient-to-t from-[#8093FF] to-[#66FFE5] bg-clip-text text-[transparent]">
                {p.payload}
              </div>
              <span className="text-2xl font-[700]"> {p.title} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="text-center w-full py-[100px] bg-c2">
      <div className="text-5xl font-[500] bg-gradient-to-t p-1 from-[#8093FF] to-[#66FFE5] bg-clip-text text-[transparent]">
        With you, we change lives
      </div>
      <p className="mt-[20px] font-[200] text-[white] w-[80%] text-center m-auto">
        If you are from a healthcare provider or you want to try our service - we can help.
      </p>
      <Link href="mailto:diagnoquest@gmail.com" className="block w-fit m-auto mt-[20px] bg-gradient-to-r from-[#6366f1] to-[#3730a3] text-[white] p-3 rounded-sm">Get In Touch</Link>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <HeroSection />
      <Program />
      <Invesment />
      <Funding />
      <Portfolio />
      <Contact />
    </main>
  );
}

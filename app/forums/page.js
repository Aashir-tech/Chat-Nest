import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Navbar from "@/components/Navbar";


const topics = [
  {
    text: "Python",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    desc: "Let's discuss everything related to Python",
    slug : "python-new"
  },
  {
    text: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    desc: "Talk about the quirks and power of JavaScript",
    slug : "js-new"
  },
  {
    text: "Web Development",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png",
    desc: "Frontend, Backend, Fullstack – it’s all welcome here",
    slug : "webdev-new"
  },
  {
    text: "AI & Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/4359/4359958.png",
    desc: "Explore the future with AI models, tools, and projects",
    slug : "ai-new"
  },
  {
    text: "Tech News",
    img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    desc: "Stay updated with the latest in the tech world",
    slug : "tech-new"
  },
];

const Forums = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto my-10 flex-wrap">
      <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">Discussion Forums</h3>

      <div className="flex flex-wrap justify-center">
        {topics.map((topic) => (
         <div key={topic.img} className="shadow-lg bg-slate-200 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 m-4 flex justify-center flex-col items-center py-10 rounded-xl gap-4">
            <Image alt={topic.desc} src={topic.img} width={74} height={74} />
            <h2 className="text-2xl font-semibold text-center">{topic.text}</h2>
            <p className="px-3 text-center">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
            <Button className="px-4 border border-slate-300 py-2">Discuss now</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Forums;

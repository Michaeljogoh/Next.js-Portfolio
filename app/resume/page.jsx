"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Socials from "@/components/socials";

// about data
const about = {
    title:"About me",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptas incidunt sapiente, nulla, est quam",
    info: [
        {
           fieldName:"Name",
           fieldValue:"Michael Jogoh"
        },
        {
           fieldName:"Phone",
           fieldValue:"(+234) 703 434 8894"
        },
        {
           fieldName:"Experience",
           fieldValue:"3+ Years"
        },
        {
           fieldName:"Skype",
           fieldValue:"michael.003"
        },
        {
           fieldName:"Nationality",
           fieldValue:"Nigerian"
        },
        {
           fieldName:"Email",
           fieldValue:"michaeljogoh@gmail.com"
        },
        {
           fieldName:"Freelance",
           fieldValue:"Available"
        },
        {
           fieldName:"Language",
           fieldValue:"English"
        },
    ]
}

// experience data 
const experience = {
    icon:"",
    title:"My Experience",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae error nemo",
    items: [
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
        {
            company:"Tech Solutions Inc",
            position:"Full Stack Developer",
            duration:"2022- present"
        },
    ]

}

// education background
const eduction = {
    icon:"",
    title:"My Education",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae error nemo",
    items: [
        {
            institution:"Online Course Platform",
            degree:"Full Stack Developer",
            duration:"2023"
        },
        {
            institution:"Codecademy",
            degree:"Back-end developer",
            duration:"2023"
        },
    
        {
            institution:"Codecademy",
            degree:"Back-end developer",
            duration:"2023"
        },
    
        {
            institution:"Codecademy",
            degree:"Back-end developer",
            duration:"2023"
        },
    
    ]

}

// skill
const skills = {
    title:"My Skills",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero nihil facilis",
    skillList:[
        {
          icon:< FaHtml5 />,
          name:"html 5",
        },
        {
          icon:< FaCss3 />,
          name:"css 3",
        },
        {
          icon:< FaJs />,
          name:"javascript",
        },
        {
          icon:< FaReact />,
          name:"react",
        },
        {
          icon:< FaFigma />,
          name:"figma",
        },
        {
          icon:< FaNodeJs />,
          name:"node.js",
        },
        {
          icon:< SiNextdotjs />,
          name:"next.js",
        },
        {
          icon:< SiTailwindcss />,
          name:"tailwind.css",
        },
        {
          icon:< FaHtml5 />,
          name:"html 5",
        },
        {
          icon:< FaHtml5 />,
          name:"html 5",
        },
    ]
}



const Resume = () => {
    return (
        <motion.div 
        initial={{ opacity: 0}} 
        animate={{opacity:1, transition:{ delay:1.5, duration: 0.3, ease:"easeIn" }}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
         <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>                       
                    <TabsTrigger value="education">Education</TabsTrigger>                       
                    <TabsTrigger value="skills">Skills</TabsTrigger>                       
                    <TabsTrigger value="about">About me </TabsTrigger>                       
                </TabsList>
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                       <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index) =>{
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                        flex flex-col justify-center items-center lg:items-start gap-1
                                        ">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </ScrollArea>
                       </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{eduction.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{eduction.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {eduction.items.map((item, index) =>{
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                        flex flex-col justify-center items-center lg:items-start gap-1
                                        ">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </ScrollArea>
                       </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) =>{
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    {/* about */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:max-0">
                                {about.info.map((about, index) =>{
                                    return(
                                        <li key={index} className="flex items-center jsutify-content xl:justify-start gap-4">
                                            <span className="text-white/60">{about.fieldName}</span>
                                            <span className="text-xl">{about.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
         </div>
        </motion.div>
    )
}

export default Resume
 
import { useRef, useState, useEffect } from 'react';
import { ShootingStars } from './ui/ShootingStars';
import { StarsBackground } from './ui/StarsBackground';
import Graph from './graph/Graph';
import { FaPencilAlt, FaFolderOpen, FaAngleDoubleRight } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { IoPerson } from "react-icons/io5";
import Histogram from "./Histogram";
import { TypeAnimation } from 'react-type-animation';
import Alienveg from '../assets/alienveg.webm';
import Navbar from './Navbar';

const HeroAbout = () => {
    const handleGo2About = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      };

      const aboutRef = useRef(null);

      const [showVideo, setShowVideo] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const videoRef = useRef(null);

      // Preload video when component mounts
      useEffect(() => {
          const video = document.createElement('video');
          video.src = Alienveg;
          video.load();
          videoRef.current = video;
      }, []);

    return (
        <>
        <Navbar />

        <div 
        className="flex items-center justify-center h-screen bg-base-200 relative overflow-hidden"
        id='hero'
        >
            <StarsBackground 
                className="z-0"
                starDensity={0.001}
            />
            <ShootingStars 
                className="z-0"
                starColor="#9E00FF"
                trailColor="#2EB9DF"
                minDelay={1000}
                maxDelay={3000}
                minSpeed={15}
                maxSpeed={30}
            />
            
            <div className='flex flex-col mb-40 bg-opacity-90 items-center justify-start text-center relative z-10'>
                <div className='h-[250px] flex items-center justify-center'>
                    <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                        showVideo || isLoading
                            ? 'opacity-100 scale-100 h-auto' 
                            : 'opacity-0 scale-95 h-0'
                    }`}>
                        {(showVideo || isLoading) && (
                            <div className='bg-base-300 p-5 shadow-md rounded-3xl'>
                                <div className='flex items-center justify-center'>
                                    {isLoading ? (
                                        <span className="loading loading-spinner text-primary"></span>
                                    ) : (
                                        <video 
                                            id='alienveg' 
                                            ref={videoRef}
                                            className='w-[150px] rounded-3xl shadow-md' 
                                            src={Alienveg} 
                                            loop 
                                            muted 
                                            playsInline 
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className='bg-base-300 w-[340px] lg:w-[500px] p-5 rounded-3xl shadow-md leading-normal text-lg lg:text-3xl text-left'>
                    <TypeAnimation
                        preRenderFirstString={false}
                        sequence={[
                        500,
                        'What if computers are actually alien vegetation?',
                        550,
                        () => {setIsLoading(true);},
                        550,
                        () => {
                            setTimeout(() => {
                                setIsLoading(false);
                                setShowVideo(true);
                                setTimeout(() => {
                                    const video = document.getElementById('alienveg');
                                    if (video) video.play();
                                }, 100);
                            }, 1100);
                        },
                        1100,
                        "Maybe they're just waiting for someone to wake them up",
                        2200,
                        '[proceeds to write a letter to the government]',
                        () => {
                            const video = document.getElementById('alienveg');
                            if (video) video.pause();
                            setShowVideo(false);
                        },
                        2200,
                        'Who programmed these responses anyway? Should be fired for poor quality engineering',
                        2500
                        ]}
                        speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                        deletionSpeed={90}
                        repeat={0}
                        className='courier-new'
                    />
                </div>

                <button 
                className="btn btn-primary rounded-2xl w-[150px] mt-10">Join</button>
                <button 
                className="btn btn-neutral rounded-2xl w-[150px] mt-2"
                onClick={handleGo2About}>See more <FaAngleDoubleRight className='mt-[1px]' /></button>
            </div>
        </div>

        <div 
        className="flex flex-col w-full bg-base-200"
        id='about'
        ref={aboutRef}
        >
            <div className='flex flex-col items-center justify-center mt-20'>
                <h1 className='text-4xl lg:text-6xl ubuntu-bold mb-2 lg:mb-5'
                >Current Projects</h1>

                <p className='text-lg lg:text-2xl ubuntu-regular mb-10'
                >Here&apos;s what crayonbrain is working on</p>
                
                <div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20'>
                    <div className='flex items-center justify-between bg-base-300 rounded-2xl p-3 w-[330px]'>
                        <div className='flex flex-col ml-5 w-full'>
                            <div className='flex flex-row items-start justify-between'>
                                <p className='text-2xl ubuntu-regular'
                                >School of Toast</p>
                                
                                <a href='https://toastschool.netlify.app' target='_blank' rel='no-referrer'>
                                <button className='btn btn-sm btn-neutral rounded-xl'
                                >View <FaAngleDoubleRight /></button>
                                </a>
                            </div>

                            <p className='text-base ubuntu-regular mt-2'
                            >Learning resource for making toast</p>
                        </div>
                    </div>
                </div>

                <h1 className='text-4xl lg:text-6xl ubuntu-bold mb-2 lg:mb-5 mt-40'
                >How it Works</h1>

                <p className='text-lg lg:text-2xl ubuntu-regular mb-10 w-80 lg:w-96 text-center'
                >An overview of how crayonbrain attempts to build things</p>

                <div className='flex flex-col lg:flex-row mt-10 mb-40 gap-20 lg:gap-32 items-center justify-center'>
                    <div className='flex flex-col gap-20 items-center justify-center lg:items-end lg:justify-end'>
                        <div className='flex flex-col items-center justify-center lg:items-end lg:justify-end'>
                            <div className='flex flex-col items-center justify-center lg:items-end lg:justify-end'>
                                <FaPencilAlt className='text-4xl text-red-400' />
                                
                                <h1 className='text-4xl ubuntu-bold mt-2'
                                >Crayon</h1>
                                
                                <div className='flex bg-red-400 w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                    <p className='text-lg ubuntu-regular text-black'
                                    >GPT-J-6b fine tune</p>
                                </div>

                                <p className='text-lg text-center w-96 lg:text-right mt-5 ubuntu-regular'
                                >Generates creative outputs and brainstorms new ideas</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center lg:items-end lg:justify-end'>
                            <div className='flex flex-col items-center justify-center lg:items-end lg:justify-end'>
                                <GiBrain className='text-5xl text-pink-400' />

                                <h1 className='text-4xl ubuntu-bold mt-2'
                                >Brain</h1>

                                <div className='flex bg-pink-400 w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                    <p className='text-lg ubuntu-regular text-black'
                                    >Claude 3.5 sonnet</p>
                                </div>

                                <p className='text-lg text-center w-96 lg:text-right mt-5 ubuntu-regular'
                                >Extracts useable ideas from Crayon and delegates to appropriate workflows</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className='flex items-center justify-center w-[370px] lg:w-[400px]'>
                        <Graph />
                    </div>

                    <div className='flex flex-col gap-20 items-center justify-center lg:items-start lg:justify-start'>
                        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                            <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                                <IoPerson className='text-4xl text-primary' />
                                
                                <h1 className='text-4xl ubuntu-bold mt-2'
                                >Human</h1>
                                
                                <div className='flex bg-primary w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                    <p className='text-lg ubuntu-regular text-black'
                                    >Carbon-based life form</p>
                                </div>

                                <p className='text-lg text-center w-96 lg:text-left mt-5 ubuntu-regular'
                                >Reviews outputs and recalibrates the workflow</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                            <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                                <FaFolderOpen className='text-5xl text-orange-400' />

                                <h1 className='text-4xl ubuntu-bold mt-2'
                                >Memory</h1>

                                <div className='flex bg-orange-400 w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                    <p className='text-lg ubuntu-regular text-black'
                                    >Cosine similarity search</p>
                                </div>

                                <p className='text-lg text-center w-96 lg:text-left mt-5 ubuntu-regular'
                                >Retrieves relevant context for new inputs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-20 w-full'>
                    <h1 className='text-4xl lg:text-6xl ubuntu-bold mb-2 lg:mb-5'
                    >Anatomy of Crayon</h1>

                    <p className='text-lg lg:text-2xl ubuntu-regular mb-5'
                    >LoRA trained on these pairs</p>
                    
                    <Histogram />
                </div>
            </div>
        </div>
        </>
    );
};

export default HeroAbout;
import { useRef } from 'react';
import { ShootingStars } from './ui/ShootingStars';
import { StarsBackground } from './ui/StarsBackground';
import Graph from './graph/Graph';
import { FaPencilAlt, FaFolderOpen } from 'react-icons/fa';
import brain from '../assets/brain.jpg';
import { GiBrain } from 'react-icons/gi';
import { IoPerson } from "react-icons/io5";

const HeroAbout = () => {
    const handleGo2About = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      };

      const aboutRef = useRef(null);
  
    return (
        <>
        <div 
        className="flex items-center justify-center min-h-screen bg-base-200 relative overflow-hidden"
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
            
            <div className='flex flex-col bg-opacity-90 items-center justify-center text-center relative z-10'>
                <img src={brain} className='rounded-2xl mb-2 w-[100px] lg:w-[150px] shadow-md' />
                
                <h1 className='text-4xl lg:text-6xl ubuntu-bold w-[350px] lg:w-[900px]'>Crayonbrain</h1>

                <p className='text-lg lg:text-2xl ubuntu-regular mt-5 w-[350px] lg:w-[600px]'
                >A multi agent system that draws outside the lines</p>

                <button 
                className="btn btn-primary rounded-2xl mt-10"
                onClick={handleGo2About}>See more</button>
            </div>
        </div>

        <div 
        className="flex flex-col w-full min-h-screen bg-base-200"
        id='about'
        ref={aboutRef}
        >
            <div className='flex flex-col items-center justify-center mt-20'>
                <div className='flex flex-col lg:flex-row mb-20 gap-20 lg:gap-32 items-center justify-center'>
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
            </div>
        </div>
        </>
    );
};

export default HeroAbout;
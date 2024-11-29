import { useRef, useState } from 'react';
import { ShootingStars } from './ui/ShootingStars';
import { StarsBackground } from './ui/StarsBackground';
import Graph from './graph/Graph';
import { FaAngleDoubleRight, FaAngleDoubleUp, FaAngleRight, FaPencilAlt } from 'react-icons/fa';
import { GiBrain, GiChefToque } from 'react-icons/gi';

const HeroAbout = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMore2, setReadMore2] = useState(false);

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
                <h1 className='text-4xl lg:text-6xl ubuntu-bold w-[350px] lg:w-[900px]'>Going backwards in the race for superintelligence</h1>

                <p className='text-lg lg:text-2xl ubuntu-regular mt-5 w-[350px] lg:w-[600px]'
                >A multi agent system with peristent memory, no goals, and a vast depth of knowledge in nonsense</p>

                <button 
                className="btn btn-primary rounded-2xl mt-10"
                onClick={handleGo2About}>See more</button>
            </div>
        </div>

        <div 
        className="flex flex-col w-full bg-base-200"
        id='about'
        ref={aboutRef}
        >
            <div className='flex flex-col items-center justify-center mt-20'>
                <div className='flex flex-col lg:flex-row gap-10 mb-20 lg:mb-40 items-center justify-center lg:items-start lg:justify-start'>
                    <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start w-[340px] lg:w-[400px]'>
                        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                            <GiChefToque className='text-5xl lg:text-6xl text-slate-400' />
                            
                            <h1 className='text-4xl lg:text-6xl ubuntu-bold mt-2 lg:mt-5'>Chef</h1>
                            
                            <div className='flex bg-slate-500 w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                <p className='text-lg ubuntu-regular text-white'>Llama 3 vision alpha</p>
                            </div>

                            <div className='flex bg-slate-500 w-[150px] h-[30px] mt-2 rounded-full items-center justify-center'>
                                <p className='text-lg ubuntu-regular text-white'>Whisper v3</p>
                            </div>

                            <div className='flex flex-col items-center justify-center mt-5'>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaAngleRight className='text-lg lg:text-xl' />
                                    <p className='text-lg lg:text-xl ubuntu-regular'>Prompts Crayon with web content</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[340px] lg:w-[400px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <FaPencilAlt className='text-4xl lg:text-6xl text-primary' />
                            
                            <h1 className='text-4xl lg:text-6xl ubuntu-bold mt-2 lg:mt-5'>Crayon</h1>
                            
                            <div className='flex bg-primary w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                <p className='text-lg ubuntu-regular text-black'>2 x Llama 2 13b (chat)</p>
                            </div>

                            <div className='flex flex-col items-start justify-center mt-5'>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaAngleRight className='text-lg lg:text-xl' />
                                    <p className='text-lg lg:text-xl ubuntu-regular'>Prompts one another</p>
                                </div>

                                <div className='flex flex-row items-center justify-center mt-2'>
                                    <FaAngleRight className='text-lg lg:text-xl' />
                                    <p className='text-lg lg:text-xl ubuntu-regular'>Generates new outputs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center lg:items-end justify-end w-[340px] lg:w-[400px]'>
                        <div className='flex flex-col items-center justify-center lg:items-end lg:justify-end'>
                            <GiBrain className='text-5xl lg:text-6xl text-pink-400' />

                            <h1 className='text-4xl lg:text-6xl ubuntu-bold mt-2 lg:mt-5'>Brain</h1>

                            <div className='flex bg-pink-400 w-[220px] h-[30px] mt-5 rounded-full items-center justify-center'>
                                <p className='text-lg ubuntu-regular text-black'>Claude 3.5 sonnet</p>
                            </div>

                            <div className='flex flex-col items-center justify-center mt-5'>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaAngleRight className='text-lg lg:text-xl' />
                                    <p className='text-lg lg:text-xl ubuntu-regular'>Gathers extra information on chat topics</p>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                    <FaAngleRight className='text-lg lg:text-xl' />
                                    <p className='text-lg lg:text-xl ubuntu-regular'>Refines  memory with higher quality data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className='flex flex-col lg:flex-row items-start mb-20 gap-5 lg:gap-20 justify-center p-6'>
                    <div className='flex flex-col items-center lg:items-end justify-start w-[370px] lg:w-[460px]'>
                        <p className='text-lg lg:text-xl text-center lg:text-right ubuntu-regular'
                        >Two LLM instances chat with each other, and conversations are logged to the memory<br /><br />
                        Each model recieves a summary of the chat history, and a relevant excerpt from the memory<br /><br />
                        </p>

                        <button 
                        className='btn btn-sm btn-outline rounded-full'
                        onClick={() => setReadMore(!readMore)}
                        >
                            Read more 
                            {readMore ? <FaAngleDoubleUp /> : <FaAngleDoubleRight />}
                        </button>

                        {readMore && (
                            <p className='text-lg lg:text-xl text-center lg:text-right ubuntu-regular mt-5'
                            >
                            When the chat starts, the HDBSCAN algorithm clusters the chat history and caches the embeddings<br /><br />
                            Model outputs are matched with the closest embeddings using cosine similarity<br /><br />
                            The result is distilled using BART to fit the context window<br /><br />
                            </p>
                        )}
                    </div>

                    <div className='w-[370px] lg:w-[400px]'>
                        <Graph />
                    </div>

                    <div className='flex flex-col items-center lg:items-start justify-start w-[370px] lg:w-[400px]'>
                        <p className='text-lg lg:text-xl text-center lg:text-left ubuntu-regular'
                        >The output from each model prompts the other<br /><br />
                        Over time, unused memories get deleted<br /><br />
                        </p>

                        <button 
                        className='btn btn-sm btn-outline rounded-full'
                        onClick={() => setReadMore2(!readMore2)}
                        >
                            Read more 
                            {readMore2 ? <FaAngleDoubleUp /> : <FaAngleDoubleRight />}
                        </button>

                        {readMore2 && (
                            <p className='text-lg lg:text-xl text-center lg:text-left ubuntu-regular mt-5'
                            >The memory bank is refined using a method derived from synaptic pruning and neuroplasticity<br /><br />
                            Human memories will fade over time if they are not used<br /><br />
                            This is replicated by periodically removing entries with the highest Euclidian distance to the memory clusters<br /><br />
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/*
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl lg:text-6xl text-center font-bold mt-20 lg:mt-32 gradient-text'>Goofiness Gradient</h1>

                <p className='text-lg lg:text-2xl text-center ubuntu-regular mt-5 w-[350px] lg:w-[600px]'
                >
                They sometimes build on each other&apos;s bizarre ideas and frequently argue, often times in creatively passive aggressive ways
                </p>
                
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-40 items-center justify-center mt-10 lg:mt-20 mb-40'>
                    <div> 
                        <Chat2 />          
                    </div>
                    <div> 
                        <Chat />
                    </div>
                </div>
            </div>
            */}
        </div>
        </>
    );
};

export default HeroAbout;
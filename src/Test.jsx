export default function TestPage() {


    return (
        <main className="flex-auto container mx-auto">
            <VideoPlayer />
        </main>
    )
}




import React, { useRef, useEffect, useState } from 'react';

function VideoPlayer() {
    const videoRef = useRef(null);
    const [showButton, setShowButton] = useState(false)
    const [isPaused, setIsPaused] = useState(false);
    const [isResumed, setIsResumed] = useState(false);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                const currentTime = videoRef.current.currentTime;
                console.log(`Video playback time: ${currentTime} seconds`);

                if (currentTime >= 10 && currentTime <= 11 && !isPaused && !isResumed) {
                    videoRef.current.pause();
                    setIsPaused(true);
                    setShowButton(true)
                    // 
                }
            }
        };

        const handlePlay = () => {
            if (isPaused) {
                setIsResumed(true);
            } else {
                setIsResumed(false);
            }
            setIsPaused(false);
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
            videoRef.current.addEventListener('play', handlePlay);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                videoRef.current.removeEventListener('play', handlePlay);

            }
        };
    }, [isPaused, isResumed]);

    return (
        <div className='relative flex justify-center'>
            {
                showButton &&
                <div className='absolute top-0 z-10 flex gap-4 pt-1'>
                    <button className='bg-farma-800 text-white p-5' onClick={() => { setShowButton(false); videoRef.current.play() }}>A</button>
                    <button className='bg-farma-800 text-white p-5' onClick={() => { setShowButton(false); videoRef.current.play() }}>B</button>
                </div>
            }
            <video ref={videoRef} className='relative flex justify-center' src="/videos/blank.mp4" controls >
            </video>
        </div>
    );
}
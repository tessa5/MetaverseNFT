import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTPage() {
    //Connect 
    const connectWithMetamask = useMetamask();
    const address= useAddress();
    const disconnect = useDisconnect();

    console.log(address)
    return (
        <div className="flex flex-col h-screen lg:grid lg:grid-cols-10">
            <div className='bg-gradient-to-br from-cyan-400 to-orange-600 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-green-500 to-blue-600 p-1 rounded-xl'>
                        <img className="w-72 h-44 object-cover rounded-xl lg:h-96 lg:w-96" src='https://coffeebros.com/wp-content/uploads/2022/03/the-best-coffee-nft-projects-to-follow-coffee-junkies.jpg' alt='nft'/>
                    </div>
                    <div className='text-center p-5 space-y-2'>
                        <h1 className="text-4xl font-bold text-white">Coffee NFTs </h1>
                        <h2 className="text-xl text-white">Only for coffee lovers who love everything coffee</h2>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-6 flex flex-1 flex-col p-5'>
                <div className='flex items-center justify-between'>
                    <h1 className="w-52 text-xl font-light sm:w-80 cursor-pointer">
                        <span className='underline decoration-orange-300 font-extrabold'>Coffee NFTs</span>{''} Market Place 
                    </h1>
                    <button 
                        onClick={() => (address ? disconnect() : connectWithMetamask())}
                        className='rounded-full bg-orange-500 text-xs text-white font-bold px-4 py-2 lg:px-5 lg:py-3 lg:text-base'
                        >{address ? 'Sign Out' : 'Sign In'}
                        </button>
                </div>
                <hr className="my-2 border"/>
                <div className='mt-8 -mb-14 items-center flex flex-1 flex-col space-y-6 lg:space-y-0 lg:justify-center'>
                    <img src='https://coffeebros.com/wp-content/uploads/2022/03/the-best-coffee-nft-projects-to-follow-crypto-baristas-1536x576.png' alt='content' className='w-3/4 object-contain pb-7 lg:h-56'/>
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>Sit down enjoy your COFFEE</h1>

                    <p className="pt-2 text-xl text-blue-600 ">11/21 NFT's claimed</p>
                </div>
                <button 
                    className='h-16 w-full bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full '>Mint NFT (0.01ETH)</button>
            </div>
            
        </div>
    )
}

export default NFTPage
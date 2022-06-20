import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import {GetServerSideProps} from 'next'


function NFTPage() {

    const connectWithMetamask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();

    return (
        <div className="flex flex-col h-screen lg:grid lg:grid-cols-10">
            <div className='bg-gradient-to-br from-cyan-400 to-orange-600 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-green-500 to-blue-600 p-1 rounded-xl'>
                        <img className="w-72 h-44 object-cover rounded-xl lg:h-96 lg:w-96" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QyHXQ2CqmGQiKdYub5EJFV1dgGykqSPfEg&usqp=CAU' alt='nft'/>
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
                        onClick={() => address ? disconnect() : connectWithMetamask()}
                        className='rounded-full bg-orange-500 text-xs text-white font-bold px-4 py-2 lg:px-5 lg:py-3 lg:text-base'>
                            {address ? "Sign In" : 'Sign Out'}
                        </button>
                </div>
                <hr className="my-2 border"/>
                {address && (
                    <p className="text-center text-purple-800 ">You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
                )}
                <div className='mt-8 -mb-14 items-center flex flex-1 flex-col space-y-6 lg:space-y-0 lg:justify-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfe30ztyQrqE1A_Gu4H5q5JqudZ9juVM2AA&usqp=CAU' alt='content' className='w-3/4 object-contain pb-7 lg:h-56'/>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const query
}
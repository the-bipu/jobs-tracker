import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const SessionExist = () => {
    return (
        <div className="w-full flex-1 h-screen bg-white md:px-6 px-0 md:py-6 py-0">
            <div className='bg-[#EDEBE9] w-full h-full flex flex-col items-center justify-center md:rounded-2xl rounded-none md:px-8 px-4 pt-8 relative overflow-hidden'>

                <div className='absolute top-4 left-0 w-full h-auto flex flex-row items-center justify-between md:px-8 px-4 py-2'>
                    <Link href='/' className='cursor-pointer'>
                        <Image src='/xbox.svg' alt='logo' width={200} height={80} className='w-28' />
                    </Link>
                    <Image src='/samsung.svg' alt='logo' width={200} height={80} className='w-28 cursor-pointer' />
                </div>

                <main className="w-full flex-1 flex flex-col md:pt-12 pt-18 items-center justify-start overflow-hidden">
                    <div className='w-full max-w-4xl flex flex-col items-center justify-start text-center px-4'>
                        <h1 className='text-3xl md:text-5xl font-bold text-center mb-4'>Already Logged In!</h1>
                        <p className='w-full md:w-2/3 text-base md:text-lg text-center text-muted-foreground mb-6'>
                            You're already signed in! Head to your dashboard to manage your job applications and track your progress.
                        </p>
                        <Link href="/dashboard">
                            <Button variant={'greenry'} className='text-xl font-light px-6 pb-6 pt-5 cursor-pointer'>Dashboard</Button>
                        </Link>
                        <div className='w-full mt-8 mb-8 flex-shrink-0'>
                            <Image src={'/job-search.jpg'} alt="Job Search" width={600} height={400} className="w-full h-auto max-h-[300px] md:max-h-[800px] object-cover border-6 border-white rounded-lg shadow-lg" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SessionExist
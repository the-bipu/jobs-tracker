import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';

import { BellIcon, CaretDownIcon, Cross1Icon, GearIcon, HamburgerMenuIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const Topbar = () => {
    const { userData, sideBar, setSideBar } = useContext(UserContext);

    return (
        <div className='bg-[#1a1a1a] text-white py-2 md:px-12 px-6 shadow flex flex-row items-center justify-end'>

            <div className='flex md:flex-row flex-col gap-2 items-center justify-center'>

                <BellIcon className='md:flex hidden w-5 h-5 cursor-pointer' />

                <QuestionMarkCircledIcon className='md:flex hidden w-5 h-5 cursor-pointer' />

                <GearIcon className='md:flex hidden w-5 h-5 cursor-pointer' />

                <div className='flex flex-row ml-3 gap-2 items-center justify-center'>
                    <Image src="/profile.jpg" alt='' width={40} height={40} className='rounded-full' />
                    <div className='flex flex-row gap-1 items-center justify-center'>
                        <span className='font-normal'>{userData?.name}</span>
                        <CaretDownIcon className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>

            </div>

            <Button className='md:hidden flex bg-[#202123] rounded p-2 shadow-md hover:bg-[#3A3A3B] transition-all duration-200' onClick={() => setSideBar(!sideBar)}>
                {!sideBar ? (
                    <HamburgerMenuIcon className='w-6 h-6' />
                ) : (
                    <Cross1Icon className='w-6 h-6' />
                )}
            </Button>
        </div>
    )
}

export default Topbar
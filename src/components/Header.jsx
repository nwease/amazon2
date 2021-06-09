import React from 'react';
import Image from 'next/image'
import {SearchIcon, MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline';

function Header() {
    return (
        <header>
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                        className='cursor-pointer'
                        src='https://links.papareact.com/f90'
                        alt='Amazon'
                        width={150}
                        height={40}
                        objectFit='contain'
                    />
                </div>

                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                    <input
                        className='p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none'
                        type='search'
                    />

                    <SearchIcon className='h-12 p-4' />
                </div>

                <div className='text-white flex items-center text-xs space-x-6 whitespace-nowrap'>
                    <div className='link'>
                        <p className='md:text-sm'>
                            Hello, Nicholas Wease
                        </p>

                        <p className='font-extrabold md:text-sm'>
                            Accounts & Lists
                        </p>
                    </div>

                    <div className='link'>
                        <p className='md:text-sm'>
                            Returns
                        </p>

                        <p className='font-extrabold md:text-sm'>
                            & Orders
                        </p>
                    </div>

                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                            4
                        </span>

                        <ShoppingCartIcon className='h-10' />

                        <p className='hidden md:inline font-extrabold md:text-sm mt-5'>
                            Cart
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex items-center bg-amazon_blue-light text-white text-sm'>
                <p className='link flex items-center font-extrabold'>
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>

                <p></p>

                <p></p>

                <p></p>

                <p></p>

                <p></p>

                <p></p>
            </div>
        </header>
    );
}

export default Header;

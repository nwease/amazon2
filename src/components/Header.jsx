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

                <div className='text-white flex items-center text-xs space-x-6'>
                    <div className=''>
                        <p className=''>
                            Hello, Nicholas Wease
                        </p>

                        <p className='text-lg'>
                            Accounts & Lists
                        </p>
                    </div>

                    <div className=''>
                        <p className=''>
                            Returns
                        </p>

                        <p className='text-lg'>
                            & Orders
                        </p>
                    </div>

                    <div className=''>
                        <ShoppingCartIcon className='h-10' />

                        <p className='text-lg'>
                            Cart
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

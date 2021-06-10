import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Feed from '../components/Feed';

export default function Home({products}) {
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>
                    Amazon2
                </title>

                <link rel='icon' href='/Amazon_icon.png' />
            </Head>

            <Header />

            <main className='max-w-screen mx-auto'>
                <Banner />

                <Feed products={products} />
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const products = await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())

    return {
        props: {
            products
        }
    }
}

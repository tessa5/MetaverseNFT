import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

interface Props {
  collections: Collection[]
}

const Home: NextPage = ({collections}:Props) => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl flex flex-col items-center justify-center py-20 px-10 2xl:px-0">
      <Head>
        <title>Meta-nft</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <h1 className="mb-10 text-4xl font-light">
          <span className='underline decoration-orange-300 font-extrabold'>Coffee NFTs</span>{''} Market Place 
      </h1>
      <main className="bg-amber-400 p-10 shadow-xl shadow-amber-900/40">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105">
            {collections.map(collection => (
              <Link href={`/nft/${collection.}`}
              <div>
                <img 
                className="h-96 w-60 rounded-2xl object-cover"
                src={urlFor(collection.mainImage).url()} 
                alt=""/>
                <div>
                  <h2 className="text-3xl">{collection.title}</h2>
                  <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

export const  getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
      asset
    },
    previewImage {
      asset
    },
    slug {current},
    creator -> {
      _id,
      name,
      address,
      slug {current},
    },
  }`

  const collections = await sanityClient.fetch(query)
  console.log(collections)

  return {
    props: {
      collections
    }
  }
}

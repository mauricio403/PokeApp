import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from './../ui/';

interface Props {
    title?: string
}

const origin = (typeof window === 'undefined') ? '' :  window.location.origin;


export const Layout: FC<Props> = ({ children, title }) => {


    
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Mauricio Matango"></meta>
                <meta name="description" content={`Info sobre el pokemon ${title}`}></meta>
                <meta name="keywords" content={`${title}, pokedex, pokemon`}></meta>


                <meta property="og:title" content={"Informacion sobre " + title} />
                <meta property="og:description" content={`Esta es una pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar></Navbar>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}

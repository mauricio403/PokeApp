import { FC } from "react";
import  Head  from "next/Head";
import { Navbar } from './../ui/';

interface Props {
    title?: string
}


export const Layout: FC <Props>= ({children, title}) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Mauricio Matango"></meta>
                <meta name="description" content={`Info sobre el pokemon ${title}`}></meta>
                <meta name="keywords" content={`${title}, pokedex, pokemon`}></meta>
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

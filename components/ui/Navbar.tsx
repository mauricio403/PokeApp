import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.red600.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="icono de la app"
                width={70}
                height={70}
            ></Image>
            <NextLink href='/' passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>Okémon App</Text>
                </Link>
            </NextLink>



            <Spacer css={{ flex: 1 }}></Spacer>
            <NextLink href='/favoritos' passHref>
                <Link css={{marginRight:'10px'}}>
                    <Text color="white" h3>Favoritos</Text>

                </Link>
            </NextLink>



        </div>
    )
}

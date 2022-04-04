import { Container, Image, Text } from '@nextui-org/react'

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
            <Text h1> No hay Favoritos </Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                width={250}
                height={350}
                css={{
                    opacity: 0.1
                }}
            ></Image>
        </Container>)
}

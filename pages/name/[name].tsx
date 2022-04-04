import { useState } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon, PokemonList } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
  pokemon: Pokemon;


}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));


  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        particleCount: 100,
        zIndex: 999,
        spread: 160,
        startVelocity: 30,
        decay: 0.95,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  }







  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other!.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color="primary"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {
                  isInFavorites ? 'Eliminar de Favoritos' : 'Guardar en favoritos'
                }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
              </Container>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

 const {data} = await pokeApi.get<PokemonList>(`/pokemon?limit=151`);
 data.results

 const pokemonNames: string[] = data.results!.map(pokemon => pokemon.name!);

  return {
    
    paths: pokemonNames.map(name => ({
      params: { name: name }
    })),
    fallback: false
  }
}




export const getStaticProps: GetStaticProps = async (ctx) => {

  const { name } = ctx.params as { name: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }

  return {
    props: {
      pokemon: pokemon
    }
  }
}

export default PokemonByNamePage;

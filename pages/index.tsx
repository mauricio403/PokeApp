import { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonList, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';  

interface Props {
  pokemons: SmallPokemon[];

}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(poke => (
            <PokemonCard pokemon={poke} key={poke.id}></PokemonCard>
          ))
        }
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151');



  const pokemons: SmallPokemon[] = data.results!.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  // ""



  return {
    props: {
      pokemons: pokemons
    }
  }
}
export default HomePage;

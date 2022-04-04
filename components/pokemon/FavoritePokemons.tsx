import { Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoritePokemonCard } from './'

interface Props {
    pokemons: number []
}

export const FavoritePokemons:FC<Props> = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (
                    <FavoritePokemonCard pokemonId = {id} key={id}></FavoritePokemonCard>
                ))
            }

        </Grid.Container>
    )
}

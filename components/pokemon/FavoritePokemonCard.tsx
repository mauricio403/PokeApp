import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react'

interface Props {
    pokemonId: number
}

export const FavoritePokemonCard:FC<Props> = ({pokemonId}) => {


    const router = useRouter();

    const onfavoriteClick =() => {
        router.push(`/pokemon/${pokemonId}`);
    }
    
    return (
       
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onfavoriteClick}>
                <Card hoverable clickable css={{ padding: 10 }}>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                        width={'150%'}
                        height={250}
                    ></Card.Image>
                </Card>
            </Grid>
        
    )
}

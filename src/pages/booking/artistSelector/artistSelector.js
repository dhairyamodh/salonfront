import React from 'react'
import { ArtistContainer, ArtistCard, Title, SubTitle } from './artistSelector.style'
const ArtistSelector = ({ data, active, handleChange }) => {
    return (
        <ArtistContainer>
            {
                data.map((artist, index) => {
                    return (
                        <ArtistCard active={active == artist._id} key={index} onClick={() => handleChange(artist)}>
                            <Title>{artist.userName}</Title>
                            <SubTitle>{
                                artist.groups.services.map((service) =>
                                    service.label
                                ).join(", ")
                            }</SubTitle>

                        </ArtistCard>
                    )
                })
            }

        </ArtistContainer>
    )
}

export default ArtistSelector

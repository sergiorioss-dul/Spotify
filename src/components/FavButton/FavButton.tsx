import { ToggleButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { FC } from 'react'
import { IButton } from './model'

const FavButton: FC<IButton> = ({ selected, track, _toggleFav }) => {
    return (
        <ToggleButton
            className="border-0"
            value="check"
            selected={selected}
            onChange={() => {
                _toggleFav(track)
            }}
        >
            {track.selected ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </ToggleButton>
    )
}

export default FavButton

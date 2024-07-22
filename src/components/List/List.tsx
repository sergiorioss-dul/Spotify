import { FC, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Item, MusicProps } from '../../pages/models'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ToggleButton } from '@mui/material'
import './styles.css'
import { useUser } from '../../hooks/useUser'

const List: FC<MusicProps> = (props) => {
    const {
        list: { tracks },
    } = props
    const [selected, setSelected] = useState(false)
    const [listTracks, setListTrack] = useState(tracks)

    const { addTrack, removeTrack } = useUser()

    const toogleFav = (track: Item) => {
        setSelected(!selected)
        if (track.selected) {
            track.selected = false
            removeTrack(track.id)
        } else {
            addTrack(track)
            track.selected = true
        }
        const foundIndex = listTracks.items.findIndex((x) => x.id == track.id)
        listTracks.items[foundIndex] = track
        setListTrack(listTracks)
    }
    return (
        <div className="overflow-scroll position-relative cardsContainer">
            {listTracks.items.map((track: Item) => {
                const { album, artists, name, preview_url, id } = track
                if (!preview_url) return

                return (
                    <div className="card cardBackground" key={id}>
                        <div className="row g-0">
                            <div className="col-sm-4">
                                <img
                                    src={album.images[0].url}
                                    className="h-100 card-img"
                                    alt={album.name}
                                />
                            </div>
                            <div className="col-sm-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a
                                            className="link-dark text-decoration-none"
                                            href="#"
                                            target="_blank"
                                        >
                                            {name}
                                        </a>
                                    </h5>
                                    <p className="card-text">{artists[0].name}</p>
                                    <div className="justify-content-center d-flex">
                                        <ReactAudioPlayer src={preview_url} controls />
                                        <div className="p-2 mb-1">
                                            <ToggleButton
                                                className="border-0"
                                                value="check"
                                                selected={selected}
                                                onChange={() => {
                                                    toogleFav(track)
                                                }}
                                            >
                                                {track.selected ? (
                                                    <FavoriteIcon />
                                                ) : (
                                                    <FavoriteBorderIcon />
                                                )}
                                            </ToggleButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List

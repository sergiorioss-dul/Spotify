import { FC } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Item, MusicProps } from '../../pages/models'
import './styles.css'
import FavButton from '../FavButton/FavButton'

const List: FC<MusicProps> = (props) => {
    const {
        list: { tracks },
        _toggleFav,
        selected,
    } = props

    return (
        <div className="overflow-scroll position-relative cardsContainer">
            {tracks.items.map((track: Item) => {
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
                                            <FavButton {...{ selected, _toggleFav, track }} />
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

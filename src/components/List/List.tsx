import ReactAudioPlayer from 'react-audio-player'
import { Item, MusicProps } from '../../pages/models'
import './styles.css'

const List = ({ tracks: { tracks } }: MusicProps) => {
    console.log('tracks', tracks)
    return (
        <div className="overflow-scroll position-relative cardsContainer">
            {tracks.items.map(({ album, artists, name, preview_url }: Item) => {
                if (!preview_url) return

                return (
                    <div className="card cardBackground">
                        <div className="row g-0">
                            <div className="col-sm-4">
                                <img
                                    src={album.images[0].url}
                                    className="h-100 card-img"
                                    alt="..."
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
                                    <ReactAudioPlayer src={preview_url} controls />
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

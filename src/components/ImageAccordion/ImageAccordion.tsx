import { FC, useState } from 'react'
import './styles.css'
import { IAccordion } from './models'
import ReactAudioPlayer from 'react-audio-player'
import FavButton from '../FavButton/FavButton'
import { useUser } from '../../hooks/useUser'

export const ImageAccordion: FC<IAccordion> = (props) => {
    const [active, setActive] = useState<number>(0)
    const { _toggleFav, selected } = useUser()
    const { favTracks } = props
    if (!favTracks) return
    const handleToggle = (index: number) => setActive(index)

    return (
        <>
            <div className="image-accordion-background"></div>
            <div className="image-accordion">
                {favTracks.map((track, index) => {
                    const isActive = active === index ? 'active' : ''
                    return (
                        <div
                            key={track.id}
                            className={`image-accordion-item ${isActive}`}
                            onClick={() => handleToggle(index)}
                        >
                            <img src={track.album.images[0].url} />
                            <div className="content">
                                <span className="material-symbols-outlined">
                                    <FavButton {...{ selected, _toggleFav, track }} />
                                </span>
                                <div>
                                    <h2>{track.name}</h2>
                                    <p>{track.artists[0].name}</p>
                                    <ReactAudioPlayer
                                        style={{ width: '240px' }}
                                        src={track.preview_url}
                                        controls
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

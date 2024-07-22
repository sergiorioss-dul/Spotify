import { FC, useState } from 'react'
import './styles.css'
import { IAccordion } from './models'
import ReactAudioPlayer from 'react-audio-player'

export const ImageAccordion: FC<IAccordion> = (props) => {
    const [active, setActive] = useState<number>(0)
    console.log(props)
    const { favTracks } = props
    if (!favTracks) return
    console.log(favTracks)
    const handleToggle = (index: number) => setActive(index)

    return (
        <>
            <div className="image-accordion-background"></div>
            <div className="image-accordion">
                {favTracks.map((item, index) => {
                    const isActive = active === index ? 'active' : ''
                    return (
                        <div
                            key={item.id}
                            className={`image-accordion-item ${isActive}`}
                            onClick={() => handleToggle(index)}
                        >
                            <img src={item.album.images[0].url} />
                            <div className="content">
                                <span className="material-symbols-outlined">{item.album.name}</span>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.artists[0].name}</p>
                                    <ReactAudioPlayer src={item.preview_url} controls />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

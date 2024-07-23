import { Item } from '../../pages/models'

export interface IButton {
    selected: boolean
    track: Item
    _toggleFav: (track: Item) => void
}

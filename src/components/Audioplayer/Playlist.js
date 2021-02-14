import bohemianAudio from './audio-files/Queen_-_Bohemian_Rhapsody.mp3';
import everyBreathAudio from './audio-files/the-police_-_every-breath-you-take.mp3';

const playlist = [
    {
        title: 'Bohemian Rhapsody',
        author: 'Queen',
        audioFile: bohemianAudio,
        id: 1,
        clip: '',
        lyrics: `
        Мой милый, милый мальчик,
        Моя милая, милая девочка.
        Никогда не знаешь, что будет дальше`,
        cover: '',
    },
    {
        title: 'Every breath you take',
        author: 'The police',
        audioFile: everyBreathAudio,
        id: 2,
        clip: '',
        lyrics: `
        Мой милый, милый мальчик,
        Моя милая, милая девочка.
        Никогда не знаешь, что будет дальше`,
        cover: '',
    }
]

export default playlist;

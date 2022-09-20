import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level2/level2-Palace-garden/bg.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level2/Octopuslevel2/Octopus.png';

const dialouge = [
    {
        text: 'Gärtner: Schau mal, diese Sonnenuhr habe ich hier im Garten gefunden. Suchst du die?',
        position: 'left',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading='Palastgarten'
                dialouge={dialouge}
                left={true}
                right={false}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_intro_chrono_test'
            />
        </>
    );
};

export default Intro;

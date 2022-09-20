import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level2/level2-Palace-garden/bg.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level2/Octopuslevel2/Octopus.png';

const dialouge = [
    {
        text: 'Balina: Entschuldigen Sie, haben Sie eine Uhr gesehen?',
        position: 'right',
    },
    {
        text: ' Gärtner: Nein, aber du könntest mir hier beim Planen helfen. Danach habe ich bestimmt noch Zeit, um dir beim Suchen zu helfen. Zwischen den Pflanzen habe ich schon so manche Dinge gefunden.',
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
                right={true}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_Palace_garden'
            />
        </>
    );
};

export default Intro;

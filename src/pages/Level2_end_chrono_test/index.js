import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level2/level2-ancient-ruins/bg.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level2/Gardener-maid-treasurer-butler-level2/fishes/fish5.png';

const dialouge = [
    {
        text: 'Zofe: Während du deinen Chronotyp bestimmt hast, habe ich noch ein bisschen geputzt. Und dabei bin ich auf dieses glitzernde Ding gestoßen.',
        position: 'left',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading=' Chrono Test'
                dialouge={dialouge}
                left={true}
                right={false}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_intro_alpen_quiz'
            />
        </>
    );
};

export default Intro;

import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level2/level2-ancient-ruins/bg.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level2/Gardener-maid-treasurer-butler-level2/fishes/fish5.png';

const dialouge = [
    {
        text: 'Zofe: Du hast mich aber erschreckt! Was machst du hier in den Ruinen des Zeitpalastes?',
        position: 'left',
    },
    {
        text: 'Balina:  Ich bin auf der Suche nach Timps Uhren',
        position: 'right',
    },
    {
        text: 'Zofe: Er verlegt aber auch wirklich immer seine Uhren. Das liegt daran, dass er kein Morgentyp ist. Weißt du, ob du ein Morgen- oder Abendtyp bist? Lass es uns herausfinden.',
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
                right={true}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_chrono_test'
            />
        </>
    );
};

export default Intro;

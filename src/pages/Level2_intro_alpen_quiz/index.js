import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level2/level2-Former-Treasury/bg.png';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level2/Gardener-maid-treasurer-butler-level2/fishes/fish3.png';

const dialouge = [
    {
        text: 'Schatzmeister: Ah, ein Dieb, zur Hilfe!',
        position: 'left',
    },
    {
        text: 'Balina: Nein, ich bin kein Dieb. Ich helfe Timp seine Uhren wiederzufinden. Hast du vielleicht eine gesehen?',
        position: 'right',
    },
    {
        text: 'Schatzmeister: Wie du sehen kannst, liegen hier ganz viele wertvolle Dinge herum. Unter anderem wertvolle Zeit und die stiehlst du mir gerade. Zeit ist kostbar und sollte sinnvoll verwendet werden. Ich zeige dir mal, wie du durch gute Zeitplanung Zeit sparen kannst.',
        position: 'left',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading='Ehemalige Schatzkammer'
                dialouge={dialouge}
                left={true}
                right={true}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_alpen_quiz'
            />
        </>
    );
};

export default Intro;

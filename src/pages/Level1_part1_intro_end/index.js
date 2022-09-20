import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level1/level1.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';

const dialouge = [
    {
        text: 'Aal : Du bist wirklich der*die Auserwählte! Ich will nicht derjenige, sein, der dich an deinem Abenteuer hindert. Nimm dieses Buch mit allem Wissen über die Selbstregulationswächter. Es wird dir auf deiner Reise helfen. Bitte rette die Königin. Beeil dich, du hast keine Zeit zu verlieren. Schnell, du musst in den Zeitpalast! Dort wartet der erste Selbstregulationswächter auf dich.',
        position: 'left',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading=' Endloser Ozean '
                dialouge={dialouge}
                left={true}
                right={false}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_Intro'
            />
        </>
    );
};

export default Intro;

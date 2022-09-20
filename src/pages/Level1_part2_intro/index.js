import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level1/level1.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';

const dialouge = [
    {
        text: ' Definition: ZieleZiele sind die für eine gerichtete Handlung oder das Ergebnis einer konkreten Leistung mögliche und notwendige Vorgabe eines Endzustands oder Endprodukts.  Sie bestimmen über die aktuelle Aufnahme, Ausführung, Veränderung und Beendigung von Handlungen und die anschließende Bewertung der zustande gekommenen Ergebnisse.',
        position: 'right',
    },
    {
        text: 'Kategorisierung von Zielen Ziele können darüber hinaus unterschiedliche Zeithorizonte haben. Bezogen auf das Studium ergeben sich folgende Zielkategorien:Langfristige Ziele: beziehen sich auf das Studium als Ganzes oder auf Teile davon Mittelfristige Ziele:  beziehen sich auf ein Studienjahr oder einzelne Semester  Kurzfristige Ziele: beziehen sich auf einzelne Wochen und Tage  ',
        position: 'right',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading='Unit 1: Goal Setting'
                dialouge={dialouge}
                left={false}
                right={true}
                characterLeft={char2}
                characterRight={char2}
                link='/Level1_part2'
            />
        </>
    );
};

export default Intro;

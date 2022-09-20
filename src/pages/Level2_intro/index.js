import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level2/level2-Palace-garden/bg.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level2/Octopuslevel2/Octopus.png';

const dialouge = [
    {
        text: 'Balina: Ok, das sind die Überreste des Zeitpalastes. Schauen wir mal in das Wissensbuch: Hier wohnt der erste Selbstregulationswächter. Sein Spezialgebiet ist die Zeitplanung. Im Zeitpalast selbst vergeht die Zeit sehr schnell, oder auch sehr langsam. Manche sagen, im Zeitpalast gäbe es gar keine Zeit. Andere behaupten, alle Zeit der Welt beginnt und endet im Zeitpalast. Die Wahrheit kennt nur der erste Selbstregulationswächter',
        position: 'right',
    },
    {
        text: 'Timp: Willkommen. Ich bin der Selbstregulationswächter des Zeitpalastes. Mein Name ist Timp. Wie kann ich dir behilflich sein?',
        position: 'left',
    },

    {
        text: 'Balina: Ich suche die Perlen zum Öffnen des Korallenturms.',
        position: 'right',
    },
    {
        text: 'Timp: Da bist du bei mir richtig. Allerdings habe ich einen Teil meiner Uhren in den Ruinen des Palastes verloren und ohne die kann ich nicht klar denken. Wenn du mir hilfst, meine Uhren zu finden, dann fällt mir bestimmt wieder ein, wo ich die rosa Perle versteckt habe. Vielleicht weiß mein Personal mehr über den Verbleib meiner kostbaren Uhren. ',
        position: 'left',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading='Zeitpalast'
                dialouge={dialouge}
                left={true}
                right={true}
                characterLeft={char2}
                characterRight={char1}
                link='/Level2_intro_Palace_garden'
            />
        </>
    );
};

export default Intro;

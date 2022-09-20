import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/images/signup-bg.jpg';
import pic from '../../assets/images/mainCharacter.png';

const dialouge = [
    {
        text: 'Endlich Urlaub! Strand, Meer und 10 Kugeln Eis, das hab ich mir wirklich verdient! ….',
        position: 'right',
    },
    {
        text: 'Ich entscheide mich eine Runde schnorcheln zu gehen. Das Wasser ist angenehm kühl und fast so strahlend blau wie der Himmel. Links von mir spielen Kinder Ball, rechts von mir spritzt sich ein Paar gegenseitig nass und vor mir liegt das große, weite Meer. Also ziehe ich mir meine Schwimmbrille, meine Flossen sowie den Schnorchel an und schwimme raus zum nächsten Riff. Die Sicht ist heute dank des strahlenden Sonnenscheins perfekt. ',
        position: 'right',
    },
    {
        text: 'Viele kleine und große Fische in den verschiedensten Farben schwimmen an mir vorbei. Sogar einen kleinen Rochen kann ich entdecken. Als ich mich gerade auf den Rückweg begeben will, zieht eine Bewegung meine Aufmerksamkeit auf sich. Direkt links von mir steigen hunderte Blubberblasen aus einem Spalt im Meeresboden.',
        position: 'right',
    },
    {
        text: 'Fasziniert beobachte ich das Schauspiel der Blasen, welche sich mittlerweile in schnellen Spiralen nach oben winden. Plötzlich erfasst mich ein Sog. Zu spät habe ich die Gefahr des entstehenden Strudels erkannt. Ich rudere mit den Armen, kämpfe gegen die Kraft des Wasserstroms an und versuche der Falle zu entfliehen. Trotz aller Anstrengung werde ich von dem mysteriösen Strudel in die Tiefe gezogen.',
        position: 'right',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading='Introduction'
                dialouge={dialouge}
                left={false}
                right={true}
                characterLeft={pic}
                characterRight={pic}
                link='/Level1_part1_intro_start'
            />
        </>
    );
};

export default Intro;

import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level1/level1.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';

const dialouge = [
    {
        text: ' Der Grund, dass die meisten Projekte, die wir uns vornehmen scheitern, ist die unklare Zielsetzung.Um eine gute Zielsetzung zu erreichen, hat sich die SMART-Technik als gutes Hilfsmittel erwiesen.',
    },
    {
        text: 'Die SMART-Formel',
        position: 'right',
    },
    {
        text: 'Um Ziele erfolgversprechender zu gestalten, sollten sie sich an den folgenden Kriterien orientieren. Diese kannst du in Zukunft immer verwenden, wenn du dir ein Ziel formulierst.        ',
        position: 'right',
    },
    {
        text: '1.	Spezifisch: Das Ziel so präzise und genau wie möglich formulieren. Wichtig ist, dass du den konkreten Zielzustand (SOLL-Zustand) beschreibst.',
        position: 'right',
    },
    {
        text: '2.	Messbar: Das Ziel sollte Kriterien enthalten, mit denen du die Zielerreichung überprüfen kannst. Verwende ruhig konkrete Zahlen, an denen du erkennen kannst, ob du deinem Ziel nähergekommen bist.         ',
        position: 'right',
    },
    {
        text: '3.	Anspruchsvoll: Das Ziel sollte anspruchsvoll sein, um deinen Ehrgeiz zur Erreichung des Ziels zu steigern. Achte jedoch darauf, dass dein Ziel dich nicht überfordert. ',
        position: 'right',
    },
    {
        text: '4.	Realistisch: Das Ziel sollte dennoch realistisch sein. Ziele, bei denen von Anfang an die Zielerreichung unmöglich ist, wirken demotivierend. Vielmehr führt es zu einer Motivationssteigerung, wenn du dir sicher bist, dass du dein Ziel auch wirklich erreichen kannst.        ',
        position: 'right',
    },
    {
        text: '5.	 Terminierbar: Das Ziel sollte eine genaue Zeitangabe enthalten, bis wann das Ziel erreicht werden soll. ',
        position: 'right',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading='Unit 2: Smart goals'
                dialouge={dialouge}
                left={false}
                right={true}
                characterLeft={char2}
                characterRight={char2}
                link='/Level1_part3'
            />
        </>
    );
};

export default Intro;

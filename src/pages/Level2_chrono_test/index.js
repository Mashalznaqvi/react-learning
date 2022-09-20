import MultipleChoice from '../../components/MultipleChoice';
import DragAndDrop from '../../components/Dnd';
import Drag from '../../components/Dnd2';
import styles from './Level2_chrono_test.module.css';
import Button from '../../components/Button';
import Character from '../../components/Character';
import char2 from '../../assets/characters/level2/Gardener-maid-treasurer-butler-level2/fishes/fish5.png';

const MultipleChoiceObject1 = {
    name: 'question_1',
    question:
        '1. Wenn du vollkommen frei in der Planung deines Abends wärst und am nächsten Tag keine Verpflichtungen hättest, zu welcher Zeit würdest du ins Bett gehen? ',
    choices: [
        '20:00 Uhr – 21:00 Uhr',
        '21:00 Uhr – 22:15 Uhr',
        '22:15 Uhr – 00:30 Uhr',
        '00:30 Uhr – 01:45 Uhr',
        '01:45 Uhr – 03:00 Uhr',
    ],
};

const MultipleChoiceObject2 = {
    name: 'question_2',
    question:
        'Du musst zwei Stunden harte körperliche Arbeit erledigen. Wenn du vollkommen frei wärest in der Planung deines Tages, in welchem der folgenden Tagesabschnitte würdest du diese Arbeit verrichten?',
    choices: ['08:00 Uhr – 10:00 Uhr', '11:00 Uhr – 13:00 Uhr', '15:00 Uhr – 17:00 Uhr', '19:00 Uhr – 21:00 Uhr'],
};

const MultipleChoiceObject3 = {
    name: 'question_3',
    question:
        'Aus irgendeinem Grund bist du mehrere Stunden später zu Bett gegangen als gewöhnlich, aber du musst am nächsten Morgen zu keiner bestimmten Zeit aufstehen. Welcher der folgenden Fälle tritt wahrscheinlich ein?',
    choices: [
        'Ich wache zur gewohnten Zeit auf und kann nicht wieder einschlafen',
        'Ich wache zur gewohnten Zeit auf und döse danach',
        'Ich wache zur gewohnten Zeit auf und schlafe danach wieder ein',
        'Ich wache erst später als gewöhnlich auf',
    ],
};

const MultipleChoiceObject4 = {
    name: 'question_4',
    question:
        'Du musst einen zweistündigen Test absolvieren, von dem du weißt, dass er geistig fordernd ist. Wenn du die freie Wahl hättest, wann würdest du den Test machen?',
    choices: ['08:00 Uhr - 10:00 Uhr', '11:00 Uhr – 13:00 Uhr', '15:00 Uhr – 17:00 Uhr', '19:00 Uhr – 21:00 Uhr '],
};

const MultipleChoiceObject5 = {
    name: 'question_5',
    question:
        'Wenn du am nächsten Tag keine Verpflichtungen hättest und vollkommen frei in der Planung deines Tages wärest, wann würdest du aufstehen?',
    choices: [
        '05:00 Uhr – 06:30 Uhr',
        '06:30 Uhr – 07:45 Uhr',
        '07:45 Uhr – 09:45 Uhr',
        '09:45 Uhr – 11:00 Uhr',
        '11:00 Uhr – 12:00 Uhr',
    ],
};

const MultipleChoiceObject6 = {
    name: 'question_6',
    question:
        'Ein*e Freund*in hat dich gebeten, ihn*sie zweimal wöchentlich ins Fitnessstudio zu begleiten. Die beste Zeit für ihn*sie ist zwischen 22:00 Uhr und 23:00 Uhr. Wenn du nun bedenkst, wie du dich normalerweise zu dieser Zeit fühlst, was denkst du, wie deine Leistung wäre?',
    choices: ['Sehr gut', 'Ziemlich gut', 'Ziemlich schlecht', 'Sehr schlecht'],
};

const MultipleChoiceObject7 = {
    name: 'question_7',
    question:
        'Du hast von so genannten “Morgentypen” und “Abendtypen” gehört. Welcher dieser Typen glaubst du selbst zu sein?',
    choices: [
        'Definitiv ein Morgentyp',
        'Mehr ein Morgen- als ein Abendtyp',
        'Mehr ein Abend- als ein Morgentyp',
        'Definitiv ein Abendtyp',
    ],
};

const Intro = () => {
    return (
        <>
            <div className={styles.container}>
                <Character character={char2} top='8rem' right='0.5rem' scaleX='-1' rotate='-10deg' position='right' />
                <div className={styles.heading}>
                    <p>Aufgabe 2: Morgentyp vs. Abendtyp</p>
                </div>
                <p>
                    Lese jede Frage aufmerksam durch. Wähle die am besten zutreffende Antwort und notiere die
                    nebenstehende Zahl.
                </p>
                <MultipleChoice choices={MultipleChoiceObject1} />
                <MultipleChoice choices={MultipleChoiceObject2} />
                <MultipleChoice choices={MultipleChoiceObject3} />
                <MultipleChoice choices={MultipleChoiceObject4} />
                <MultipleChoice choices={MultipleChoiceObject5} />
                <MultipleChoice choices={MultipleChoiceObject6} />
                <MultipleChoice choices={MultipleChoiceObject7} />

                <Button
                    text='Next'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/Level2_end_chrono_test'
                />
            </div>
        </>
    );
};

export default Intro;

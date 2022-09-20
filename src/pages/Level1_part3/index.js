import MultipleChoice from '../../components/MultipleChoice';
import DragAndDrop from '../../components/Dnd';
import Drag from '../../components/Dnd2';
import styles from './Level1_part3.module.css';
import Character from '../../components/Character';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';
import Button from '../../components/Button';

import Question_Answer from '../../components/Question_Answer';

const MultipleChoiceObject1 = {
    name: 'question_1',
    question:
        '2. Ich fertige mir bis zum 15.01.2019 ein Skript für "Lehren und Lernen" an. Dafür werde ich jede Woche die aktuelle Vorlesung zusammenfassen und meine Notizen einfügen. Falls ich mal krank bin, werde ich die Inhalte spätestens in der darauffolgenden Woche nachholen." Was meinst du - fehlt ein smartes Ziel in dieser Aussage oder sind alle erfüllt? ',
    choices: [
        'Alle smarten Ziele sind erfüllt ',
        'Die Aussage ist nicht Messbar',
        'Die Aussage ist nicht Terminiert',
        'Die Aussage ist nicht Spezifisch ',
        'Die Aussage ist nicht Realistisch ',
    ],
};

const MultipleChoiceObject2 = {
    name: 'question_2',
    question: '3.Die Kriterien der smarten Zielsetzung müssen immer alle erfüllt sein. ',
    choices: ['right', 'wrong'],
};

const MultipleChoiceObject3 = {
    name: 'question_4',
    question: '4. Das Modell von Zimmerman ist ein lineares Modell der Selbstregulation',
    choices: ['Wahr', 'Falsch'],
};

const DnD1 = {
    droppableId: '3',
    text: 'The following words have to be assigned to the corresponding phase: Kommunikation, Selbstmotivation (1), Selbstbeobachtung (2), Attribution (3), Prokrastination, Verbalisierung',
    question:
        '3.Ordne die richtigen Strategien den jeweiligen Phasen des Zimmerman Modells zu Phases: Planungsphase, Handlungsphase, Reflexionsphase',
    choices: [
        {
            name: 'a',
            id: '1',
            option: 'Planungsphase ',
        },
        {
            name: 'b',
            id: '2',
            option: 'Handlungsphase',
        },
        {
            name: 'c',
            id: '3',
            option: 'Reflexionsphase ',
        },
    ],
};

const DnD2 = {
    info: '',
    question:
        '5.	Selbstreguliertes Lernen ist ein [--board--], konstruktiver Prozess, bei dem der Lernende sich Ziele setzt und zudem seine Kognitionen, seine [--board--] und sein Verhalten in Abhängigkeit von dessen Zielen und den gegebenen [--board--] beobachtet, reguliert und [--board--].',
    choices: [
        {
            id: '1',
            option: 'investiert ',
        },
        {
            id: '2',
            option: 'denkt ',
        },
        {
            id: '3',
            option: 'langwieriger ',
        },
        {
            id: '4',
            option: 'Emotionen ',
        },
        {
            id: '5',
            option: 'Motivation  ',
        },
        {
            id: '6',
            option: 'aktiver  ',
        },
        {
            id: '7',
            option: 'kontrolliert  ',
        },
        {
            id: '8',
            option: 'Gefühlen ',
        },
        {
            id: '9',
            option: 'Gedanken ',
        },
        {
            id: '10',
            option: 'Rückmeldungen ',
        },
        {
            id: '11',
            option: 'äußeren Umstände ',
        },
        {
            id: '12',
            option: 'zufälliger  ',
        },
    ],
};

const Intro = () => {
    return (
        <>
            <div className={styles.container}>
                <Character character={char2} top='8rem' right='0.5rem' scaleX='-1' rotate='-10deg' position='right' />
                <div className={styles.heading}>
                    {' '}
                    <p>SMART QUIZ</p>
                </div>
                <p>1. Was bedeuten die Buchstaben der smarten Zielsetzung?</p>
                <Question_Answer label='S' />
                <Question_Answer label='M' />
                <Question_Answer label='A' />
                <Question_Answer label='R' />
                <Question_Answer label='T' />
                <MultipleChoice choices={MultipleChoiceObject1} />
                <MultipleChoice choices={MultipleChoiceObject2} />
                <Question_Answer label='4. "Ich möchte dieses Semester unbedingt die SQS-Klausur bestehen" Was würdest du an dieser Zielsetzung ändern, um sie smart zu gestalten?' />
                <Question_Answer label='5. Versuche, eines oder mehrere deiner Ziele (kurzfristig, mittelfristig oder langfristig) in eine smarte Zielsetzung umzuformulieren.' />
                <Button
                    text='Next'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/Level1_part4_intro'
                />
            </div>
        </>
    );
};

export default Intro;

import MultipleChoice from '../../components/MultipleChoice';
import DragAndDrop from '../../components/Dnd';
import Drag from '../../components/Dnd2';
import styles from './Level1_part2.module.css';
import Character from '../../components/Character';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import Question_Answer from '../../components/Question_Answer';

const MultipleChoiceObject1 = {
    name: 'question_1',
    question: '1.Welches sind Komponenten der Selbstregulation? ',
    choices: [
        'kognitive Komponente, metakognitive Komponente, motivationale Komponente',
        'kognitive Komponente, kreative Komponente, volitionale Komponente',
        'metakognitive Komponente, volitionale Komponente, methodische Komponente',
        'Wissenskomponente, Intelligenzkomponente, Rigiditätskomponente',
    ],
};

const MultipleChoiceObject2 = {
    name: 'question_2',
    question: '2.Wie heißen die drei Phasen des Zimmerman Modells? ',
    choices: [
        'Planungsphase, Handlungsphase, Reflexionsphase',
        'Planungsphase, Testphase, Reflexionsphase',
        'Zielsetzungsphase, Ausführungsphase, Bewertungsphase',
        'Zielsetzungsphase, Handlungsphase, Kontrollphase',
    ],
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
                    <p>Ziele Setzen</p>
                </div>
                <p>
                    Ziele können einen unterschiedlichen Zeithorizont haben. Dabei gibt es langfristige (ganzes
                    Studium), mittelfristige (einzelne Semester) und kurzfristige (einzelne Wochen/Tage) Ziele. Setze
                    dir jeweils ein spezifisches Ziel zu jedem Zeithorizont.
                </p>

                <Question_Answer label='Langfristiges Ziel' />

                <Question_Answer label='Mittelfristiges Ziel:' />

                <Question_Answer label='Kurzfristiges Ziel:' />

                <Question_Answer label='Welche Stärken können dir bei der Erreichung dieser Ziele helfen?' />

                <Question_Answer label='Welche Schwächen könnten die Zielerreichung beeinträchtigen?' />
                <Button
                    text='Next'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/Level1_part3_intro'
                />
            </div>
        </>
    );
};

export default Intro;

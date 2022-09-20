import MultipleChoice from '../../components/MultipleChoice';

import styles from './Level2_alpen_quiz.module.css';
import Button from '../../components/Button';
import Character from '../../components/Character';
import char2 from '../../assets/characters/level2/Gardener-maid-treasurer-butler-level2/fishes/fish3.png';

const MultipleChoiceObject1 = {
    name: 'question_1',
    question: 'Die ALPEN-Methode ist eine Strategie für',
    choices: [
        'Allgemeine Selbstwirksamkeit',
        'Berufliche Selbstwirksamkeit',
        'Zeitmanagement',
        'Höhere Arbeitszufriedenheit',
    ],
};

const MultipleChoiceObject2 = {
    name: 'question_2',
    question: 'Welche der folgenden Antworten ist falsch? Bei Punkt „L“ der Alpenmethode',
    choices: [
        'Sollte man das SMART-Prinzip im Hinterkopf behalten',
        'Sollte man beachten, ob mehrere Personen an der Aufgabe beteiligt sind',
        'Sollte  man  das  Pareto-Prinzip  nutzen,  dass  man  mit  20%  des  Aufwands  80%  der Leistung erreicht.',
        'Sollte ein Mittagstief eingeplant werden',
    ],
};

const MultipleChoiceObject3 = {
    name: 'question_3',
    question: 'Die Faustregel zur Zeitschätzung beinhaltet nicht.',
    choices: [
        'Multiplikation mit 2',
        'Optimistische Bearbeitungsdauer',
        'Division durch 2',
        'Pessimistische Bearbeitungsdauer',
    ],
};

const MultipleChoiceObject4 = {
    name: 'question_4',
    question: 'Welche der folgenden Aussagen über die Eisenhower-Matrix ist falsch?',
    choices: [
        'Die Eisenhower-Matrix ist eine Methode zum Umgang mit der ABC-Analyse',
        'Sie kategorisiert Aufgaben entsprechend ihrer Wichtigkeit und Dringlichkeit',
        'B-Aufgaben sind dringend, aber wenig wichtig.',
        'Aufgaben können gestrichen werden, wenn sie weder wichtig noch dringend sind',
    ],
};

const MultipleChoiceObject5 = {
    name: 'question_5',
    question: 'Welche Aussage zum Aufgabenmanagement ist falsch?',
    choices: [
        'Man sollte Aufgaben thematisch zu mischen, um für Abwechslung zu sorgen.',
        'Zu kurze Pausen können zu Demotivation und Trägheit führen.',
        'Gleichbleibende Lernzeiten sollten täglich mit neuen Inhalten gefüllt werden.',
        'Zeiten zwischen Vorlesungen oder in Bus&Bahn können genutzt werden.',
    ],
};

const Intro = () => {
    return (
        <>
            <div className={styles.container}>
                <Character character={char2} top='8rem' right='0.5rem' scaleX='-1' rotate='-10deg' position='right' />
                <div className={styles.heading}>
                    <p>ALPEN QUIZ</p>
                </div>
                <p>Die richtigen Antworten sind gelb markiert.</p>
                <MultipleChoice choices={MultipleChoiceObject1} />
                <MultipleChoice choices={MultipleChoiceObject2} />
                <MultipleChoice choices={MultipleChoiceObject3} />
                <MultipleChoice choices={MultipleChoiceObject4} />
                <MultipleChoice choices={MultipleChoiceObject5} />

                <Button
                    text='Next'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/Level2_chrono_test_'
                />
            </div>
        </>
    );
};

export default Intro;

import MultipleChoice from '../../components/MultipleChoice';
import DragAndDrop from '../../components/Dnd';
import Drag from '../../components/Dnd2';
import styles from './Level1_part4.module.css';
import Character from '../../components/Character';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import Rating from '../../components/Rating';

const MultipleChoiceObject2 = {
    name: 'question_1',
    questions: [
        { question: 'neue Ideen zu bekommen ', id: 1 },
        { question: 'zu zeigen, dass ich bei einer Sache gut bin', id: 2 },
        { question: 'dass andere Studierende nicht denken, ich sei dumm', id: 3 },
        { question: 'keine schwierigen Prüfungen zu haben', id: 4 },
        { question: 'etwas Interessantes zu lernen', id: 5 },
        { question: 'mich nicht zu blamieren', id: 6 },
        { question: 'zu Hause keine Arbeiten erledigen zu müssen', id: 7 },
        { question: 'später knifflige Probleme lösen zu können', id: 8 },
        { question: 'Arbeiten besser zu schaffen als andere', id: 9 },
        { question: 'dass niemand merkt, wenn ich etwas nicht verstehe', id: 10 },
        { question: 'keine schwierigen Fragen oder Aufgaben lösen zu müssen', id: 11 },
        { question: 'komplizierte Inhalte zu verstehen', id: 12 },
        { question: 'essere Noten oder Beurteilungen zu bekommen', id: 13 },
        { question: 'dass niemand denkt, ich sei weniger schlau als andere', id: 14 },
        { question: 'nicht so schwer zu arbeiten', id: 15 },
        { question: 'dass das Gelernte für mich Sinn ergibt', id: 16 },
        { question: 'dass andere denken, dass ich klug bin', id: 17 },
        { question: 'zu verbergen,wenn ich weniger weiß als andere', id: 18 },
        { question: 'dass die Arbeit leicht ist', id: 19 },
        { question: 'zum Nachdenken angeregt zu werden', id: 20 },
        { question: 'zu zeigen,dass ich die Inhalte beherrsche', id: 21 },
        { question: 'keine falschen Antworten auf Fragen der Dozenten zu geben', id: 22 },
        { question: 'aufwendige Aufgaben nicht selber erledigen zu können', id: 23 },
        { question: 'so viel wie möglich zu lernen', id: 24 },
        { question: 'das ich was kann und weiß auch zu zeigen', id: 25 },
        { question: 'nicht durch dumme Fragen aufzufallen', id: 26 },
        { question: 'mit wenig Arbeit durchs Studium zu kommen', id: 27 },
        { question: 'ein tiefes Verständnis für die Inhalte zu erwerben', id: 28 },
        { question: 'dass die anderen merken,wenn ich in Prüfungen gut abschneide', id: 29 },
        { question: 'nicht zu zeigen,wenn mir eine Aufgabe schwerer fällt als den anderen', id: 30 },
        { question: 'den Arbeitsaufwand stets gering zu halten', id: 30 },
    ],
    choices: ['stimmt gar nicht', 'stimmt eher nicht', 'weder/noch', 'stimmt eher', 'stimmtgenau'],
};

const Intro = () => {
    return (
        <>
            <div className={styles.container}>
                <Character character={char2} top='8rem' right='0.5rem' scaleX='-1' rotate='-10deg' position='right' />
                <div className={styles.heading}>
                    <p>Zielorientierung</p>
                </div>
                <p>
                    Bei dieser Aufgabe geht es um Dinge, die dir im Studium wichtig sind. Bitte lies die Fragen
                    sorgfältig durch und versuche sie ehrlich zu beantworten. Es gibt keine falschen Antworten. Kreuze
                    immer das Kästchen an, das am ehesten für dich zutrifft (lösche dazu einfach das Kästchen und setze
                    ein „x“).
                </p>
                <Rating choices={MultipleChoiceObject2} />
                <p>So wertest du deine Antworten aus</p>
                <p>Für jedes Kreuz gibt es folgende Punkte:</p>
                <table>
                    <tr>
                        <td>stimmt gar nicht</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>stimmt eher nicht</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>weder/noch</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>stimmt eher</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>stimmt genau</td>
                        <td>5</td>
                    </tr>
                </table>

                <p>
                    Nun kannst du für die Zielarten Lernziele, Annäherungs-Leistungsziele, Vermeidungs- Leistungsziele
                    und Arbeitsvermeidung deine persönliche Punktzahl berechnen und in dein Profildiagramm eintragen.
                </p>
                <p>Auf der nächsten Seite erhältst du genauere Informationen zu den Zielarten.</p>
                <TextBox label='Lernziele (1) Addiere die Items 01, 05, 08, 12, 16, 20, 24 und 28: ' />
                <TextBox label='Annäherungs-Leistungsziele (2) Addiere die Items 02, 09, 13, 17, 21, 25 und 29: ' />
                <TextBox label='Vermeidungs-Leistungsziele (3) Addiere die Items 03, 06, 10, 14, 18, 22, 26 und 30: ' />
                <TextBox label='Arbeitsvermeidung (4) Addiere die Items 04, 07, 11, 15, 19, 23, 27 und 31:' />

                <Button
                    text='Next'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/Level1_part1_intro_end'
                />
            </div>
        </>
    );
};

export default Intro;

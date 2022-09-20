import Piechart from '../../components/Piechart';
import styles from './Level2_Palace_garden.module.css';
import { useState, useEffect } from 'react';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

const Intro = () => {
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);

    const [myData, setData] = useState([
        { title: 'Präsenzzeit', value: 30, color: 'orange' },
        { title: 'Selbststudium', value: 100, color: 'green' },
        { title: 'Hobbys', value: 90, color: 'purple' },
        { title: 'Haushalt', value: 90, color: 'red' },
        { title: 'Hygiene', value: 90, color: 'blue' },
        { title: 'Schlaf', value: 90, color: 'black' },
        { title: 'Essen', value: 90, color: 'pink' },
        { title: 'Freizeit', value: 90, color: 'grey' },
    ]);
    const [myData2, setmyData2] = useState([
        { title: 'Präsenzzeit', value: 30, color: 'orange' },
        { title: 'Selbststudium', value: 100, color: 'green' },
        { title: 'Hobbys', value: 90, color: 'purple' },
        { title: 'Haushalt', value: 90, color: 'red' },
        { title: 'Hygiene', value: 90, color: 'blue' },
        { title: 'Schlaf', value: 90, color: 'black' },
        { title: 'Essen', value: 90, color: 'pink' },
        { title: 'Freizeit', value: 90, color: 'grey' },
    ]);
    const height = '2.5rem';
    const width = '9rem';
    const [myData3, setmyData3] = useState([
        { title: 'Präsenzzeit', value: 30, color: 'orange' },
        { title: 'Selbststudium', value: 100, color: 'green' },
        { title: 'Hobbys', value: 90, color: 'purple' },
        { title: 'Haushalt', value: 90, color: 'red' },
        { title: 'Hygiene', value: 90, color: 'blue' },
        { title: 'Schlaf', value: 90, color: 'black' },
        { title: 'Essen', value: 90, color: 'pink' },
        { title: 'Freizeit', value: 90, color: 'grey' },
    ]);

    const appendArray = (e, id, question) => {
        if (question === 1) {
            let copyData = [...myData];
            if (e.target.value !== '') {
                copyData[id].value = parseInt(e.target.value);
            } else {
                copyData[id].value = 0;
            }
            setData(copyData);
        }

        if (question === 2) {
            let copyData = [...myData2];
            if (e.target.value !== '') {
                copyData[id].value = parseInt(e.target.value);
            } else {
                copyData[id].value = 0;
            }
            setmyData2(copyData);
        }

        if (question === 3) {
            let copyData = [...myData3];
            if (e.target.value !== '') {
                copyData[id].value = parseInt(e.target.value);
            } else {
                copyData[id].value = 0;
            }
            setmyData3(copyData);
        }
    };

    useEffect(() => {
        console.log('UPDATED: ', myData);
    }, [myData]);

    const updateItem = (event, val) => {
        // 👇️ toggle shown state
        if (val === 1) setIsShown1(current => true);
        if (val === 2) setIsShown2(current => !current);
        if (val === 3) setIsShown3(current => !current);
    };

    return (
        <>
            <div className={styles.container}>
                <h className={styles.heading}>Aufgabe 2.1: Zeitanalyse</h>
                <p>
                    Auf den folgenden drei Arbeitsblättern ist jeweils ein Kreis abgebildet. Jeder Kreis stellt jeweils
                    eine gesamte Woche mit sieben Tagen (und 168 Stunden) dar. In diesen Kreis sollst du den
                    prozentualen Anteil eintragen, den bestimmte Tätigkeiten in deinem Leben einnehmen.{' '}
                </p>
                <p>
                    Bitte trage in den ersten Kreis ein, wie viel Zeit du real mit einzelnen Tätigkeiten verbringst. Es
                    sind einige Beispiele genannt, du kannst diese natürlich mit deinen eigenen Beispielen ergänzen.
                </p>
                <p>
                    Im zweiten Kreis geht es um deine mentale Zeiteinteilung. Wie viel Zeit pro Woche verbringst du in
                    Gedanken mit den einzelnen Tätigkeiten? Das bedeutet, dass du vielleicht gedanklich länger mit etwas
                    beschäftigt bist, als dies zunächst offensichtlich ist (wenn du dich z. B. auch nach Feierabend
                    gedanklich mit studiennahen Themen beschäftigen).{' '}
                </p>
                <p>
                    Als letztes kommt dein Wunschkreis. Wie viel Zeit pro Woche würdest du gerne mit den einzelnen
                    Tätigkeiten verbringen?
                </p>
                <p>
                    Am Ende vergleichst du bitte die drei Kreise miteinander und überprüfst, inwiefern sie sich
                    entsprechen bzw. an welchen Stellen es Abweichungen gibt.
                </p>

                <div className={styles.chartContainer}>
                    <h1>Reale Zeiteinteilung:</h1>
                    <p>
                        Wie viel Prozent deiner Zeit pro Woche (7 Tage) nutzt du für welche Aktivitäten? Trage dies in
                        den folgenden Kreis ein
                    </p>
                    <div>
                        <TextBox
                            label='Präsenzzeit'
                            height={height}
                            width={width}
                            value={myData[0].value}
                            name='value'
                            handleChange={e => appendArray(e, 0, 1)}
                        />
                        <TextBox
                            label='Selbststudium'
                            height={height}
                            width={width}
                            value={myData[1].value}
                            name='value'
                            handleChange={e => appendArray(e, 1, 1)}
                        />
                        <TextBox
                            label='Hobbys'
                            height={height}
                            width={width}
                            value={myData[2].value}
                            name='value'
                            handleChange={e => appendArray(e, 2, 1)}
                        />
                        <TextBox
                            label='Haushalt'
                            height={height}
                            width={width}
                            value={myData[3].value}
                            name='value'
                            handleChange={e => appendArray(e, 3, 1)}
                        />
                        <TextBox
                            label='Hygiene'
                            height={height}
                            width={width}
                            value={myData[4].value}
                            name='value'
                            handleChange={e => appendArray(e, 4, 1)}
                        />
                        <TextBox
                            label='Schlaf'
                            height={height}
                            width={width}
                            value={myData[5].value}
                            name='value'
                            handleChange={e => appendArray(e, 5, 1)}
                        />
                        <TextBox
                            label='Essen'
                            height={height}
                            width={width}
                            value={myData[6].value}
                            name='value'
                            handleChange={e => appendArray(e, 6, 1)}
                        />
                        <TextBox
                            label='Freizeit'
                            height={height}
                            width={width}
                            value={myData[7].value}
                            name='value'
                            handleChange={e => appendArray(e, 7, 1)}
                        />
                    </div>
                    <Button
                        text='Generate Chart'
                        height={height}
                        width={width}
                        color='#F09819'
                        colorCenter='#ebdc5c'
                        link=''
                        height='2.5rem'
                        width='15rem'
                        handleClick={e => updateItem(e, 1)}
                    />
                    {isShown1 && <Piechart Data={myData} />}
                </div>

                <div>
                    <h>Mentale Zeiteinteilung:</h>
                    <p>
                        Wie viel Prozent deiner Zeit pro Woche (7 Tage) nutzt du für welche Aktivitäten? Trage dies in
                        den folgenden Kreis ein :
                    </p>

                    <TextBox
                        label='Präsenzzeit'
                        height={height}
                        width={width}
                        value={myData2[0].value}
                        name='value'
                        handleChange={e => appendArray(e, 0, 2)}
                    />
                    <TextBox
                        label='Selbststudium'
                        height={height}
                        width={width}
                        value={myData2[1].value}
                        name='value'
                        handleChange={e => appendArray(e, 1, 2)}
                    />
                    <TextBox
                        label='Hobbys'
                        height={height}
                        width={width}
                        value={myData[2].value}
                        name='value'
                        handleChange={e => appendArray(e, 2, 2)}
                    />
                    <TextBox
                        label='Haushalt'
                        height={height}
                        width={width}
                        value={myData2[3].value}
                        name='value'
                        handleChange={e => appendArray(e, 3, 2)}
                    />
                    <TextBox
                        label='Hygiene'
                        height={height}
                        width={width}
                        value={myData2[4].value}
                        name='value'
                        handleChange={e => appendArray(e, 4, 2)}
                    />
                    <TextBox
                        label='Schlaf'
                        height={height}
                        width={width}
                        value={myData2[5].value}
                        name='value'
                        handleChange={e => appendArray(e, 5, 2)}
                    />
                    <TextBox
                        label='Essen'
                        height={height}
                        width={width}
                        value={myData[6].value}
                        name='value'
                        handleChange={e => appendArray(e, 6, 2)}
                    />
                    <TextBox
                        label='Freizeit'
                        height={height}
                        width={width}
                        value={myData[7].value}
                        name='value'
                        handleChange={e => appendArray(e, 7, 2)}
                    />

                    <Button
                        text='Generate Chart'
                        color='#F09819'
                        colorCenter='#ebdc5c'
                        link=''
                        height='2.5rem'
                        width='15rem'
                        handleClick={e => updateItem(e, 2)}
                    />

                    {isShown2 && <Piechart Data={myData2} />}
                </div>

                <div>
                    <h>Gewünschte Zeiteinteilung:</h>
                    <p>
                        Erstelle deinen Wunschkreis. Folgende Fragen können dir dabei behilflich sein: Analysiere deine
                        momentane Zeiteinteilung. - Ist das die Einteilung, die du wünschst? - Fehlen im realen und
                        mentalen Kreis Bereiche, die für dich wichtig sind? - Wie sieht deine ideale Einteilung aus,
                        damit alle Bereiche angemessen berücksichtigt sind?
                    </p>

                    <TextBox
                        label='Präsenzzeit'
                        height={height}
                        width={width}
                        value={myData[0].value}
                        name='value'
                        handleChange={e => appendArray(e, 0, 3)}
                    />
                    <TextBox
                        label='Selbststudium'
                        height={height}
                        width={width}
                        value={myData[1].value}
                        name='value'
                        handleChange={e => appendArray(e, 1, 3)}
                    />
                    <TextBox
                        label='Hobbys'
                        height={height}
                        width={width}
                        value={myData[2].value}
                        name='value'
                        handleChange={e => appendArray(e, 2, 3)}
                    />
                    <TextBox
                        label='Haushalt'
                        height={height}
                        width={width}
                        value={myData[3].value}
                        name='value'
                        handleChange={e => appendArray(e, 3, 3)}
                    />
                    <TextBox
                        label='Hygiene'
                        height={height}
                        width={width}
                        value={myData[4].value}
                        name='value'
                        handleChange={e => appendArray(e, 4, 3)}
                    />
                    <TextBox
                        label='Schlaf'
                        height={height}
                        width={width}
                        value={myData[5].value}
                        name='value'
                        handleChange={e => appendArray(e, 5, 3)}
                    />
                    <TextBox
                        label='Essen'
                        height={height}
                        width={width}
                        value={myData[6].value}
                        name='value'
                        handleChange={e => appendArray(e, 6, 3)}
                    />
                    <TextBox
                        label='Freizeit'
                        height={height}
                        width={width}
                        value={myData[7].value}
                        name='value'
                        handleChange={e => appendArray(e, 7, 3)}
                    />

                    <Button
                        text='Generate Chart'
                        color='#F09819'
                        colorCenter='#ebdc5c'
                        link=''
                        height='2.5rem'
                        width='15rem'
                        handleClick={e => updateItem(e, 3)}
                    />

                    {isShown3 && <Piechart Data={myData3} />}
                </div>
                <Button
                    text='Finish'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    link='/Level2_intro_Palace_garden_end'
                    height='2.5rem'
                    width='15rem'
                />
            </div>
        </>
    );
};

export default Intro;

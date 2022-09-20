import LevelIntro from '../../components/levelintro';
import backgroundUrl from '../../assets/Background/level1/level1.jpg';
import char1 from '../../assets/images/mainCharacter.png';
import char2 from '../../assets/characters/level1/frogfishlevel1/frog.png';

const dialouge = [
    {
        text: ' Balina : Was ist passiert?...    Wo bin ich?',
        position: 'right',
    },
    {
        text: 'Aal : Du befindest dich im Unterwasserkönigreich Regulatia. Bei deiner Reise durch den Strudel bist du bewusstlos geworden Ich dich während meines Spaziergangs gefunden.',
        position: 'left',
    },
    {
        text: 'Balina : Du meine Güte, ich habe ja Flossen! Was ist hier los? Das ist nicht mein Körper. Wie ist das passiert?',
        position: 'right',
    },
    {
        text: 'Aal : Als Mensch könntest du unter Wasser nicht atmen, deshalb wurdest du bei deiner Reise verwandelt. ',
        position: 'left',
    },
    {
        text: 'Balina : Ich will nach Hause. Und aus diesem Körper raus.',
        position: 'right',
    },
    {
        text: 'Aal : Nach Hause gelangst du nur, wenn du unsere Königin befreist, die im Korallenturm festgehalten wird. Allerdings kann nur der*die Auserwählte die vier Perlen erlangen, um die Tür des Korallenturms zu öffnen. Dazu musst die Aufgaben der vier Selbstregulationswächter lösen.',
        position: 'left',
    },
    {
        text: 'Balina: So habe ich mir meinen Urlaub nicht vorgestellt...',
        position: 'right',
    },
    {
        text: 'Aal : Bevor ich dich allerdings gehen lasse, prüfe ich zuerst, ob du auch wirklich der*die Auserwählte bist. Wenn du es schaffst, meine Aufgaben zu lösen, dann zeige ich dir den Weg zum Zeitpalast.',
        position: 'left',
    },
];

const Intro = () => {
    return (
        <>
            <LevelIntro
                backgroundUrl={backgroundUrl}
                heading=' Endloser Ozean '
                dialouge={dialouge}
                left={true}
                right={true}
                characterLeft={char2}
                characterRight={char1}
                link='/Level1_part1'
            />
        </>
    );
};

export default Intro;

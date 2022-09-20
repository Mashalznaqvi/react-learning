import DragOptions from './DragOptions';
import DropBoard from './DropBoard';
import styles from './dnd2.module.css';

const Dnd2 = props => {
    const { choices } = props;

    let splitCode = [choices.question];

    splitCode.forEach(part => {
        let index = splitCode.indexOf(part);

        if (typeof part === 'string') {
            part = part.split('[--board--]');

            if (part.length > 1) {
                let boardTag = <DropBoard choices={choices.choices} />;

                let i = 1;

                while (i < part.length) {
                    part.splice(i, 0, boardTag);
                    i += 2;
                }
            }
        } else {
            part = [part];
        }

        splitCode.splice(index, 1, ...part);
        console.log(splitCode);
    });

    return (
        <>
            {choices.info !== '' && <p>{choices.info}</p>}

            <div className={styles.question}>
                {splitCode.map(el => {
                    return el;
                })}
            </div>
            <ul>
                {choices.choices.map(choice => {
                    return (
                        <li className={styles.choiceBoard} key={choice.id}>
                            <DragOptions option={choice.option} id={choice.id} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Dnd2;

import { useState } from 'react';
import { useDrop } from 'react-dnd';
import DragOptions from './DragOptions';
import styles from './dnd2.module.css';

const DropBoard = props => {
    const { choices } = props;
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'option',
        drop: item => addOptionToBoard(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addOptionToBoard = id => {
        const choicesList = choices.filter(choice => id === choice.id);
        setBoard(board => [choicesList[0]]);
    };

    return (
        <span className={styles.DragBoard} ref={drop}>
            {board.map(dragOption => {
                return <DragOptions option={dragOption.option} id={dragOption.id} key={dragOption.id} />;
            })}
        </span>
    );
};

export default DropBoard;

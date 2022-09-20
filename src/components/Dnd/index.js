import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import styles from './dnd.module.css';

const DnD = props => {
    const { choices } = props;
    const [choice, setChoice] = useState(choices.choices);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(choice);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setChoice(items);
    }

    return (
        <>
            <p className={styles.question}>{choices.question}</p>
            <p className={styles.question}>{choices.text}</p>
            <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId={choices.droppableId}>
                        {provided => (
                            <ul className={styles.options} {...provided.droppableProps} ref={provided.innerRef}>
                                {choice.map(({ id, name, option }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {provided => (
                                                <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <p className={styles.number}>{index + 1}</p>
                                                    <div>
                                                        <p>{option}</p>
                                                    </div>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </>
    );
};
resetServerContext();
export default DnD;

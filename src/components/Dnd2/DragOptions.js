import { useDrag } from 'react-dnd';
import styles from './dnd2.module.css';

function DragOptions({ id, option }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'option',
        item: { id: id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return <span ref={drag}>{option}</span>;
}

export default DragOptions;

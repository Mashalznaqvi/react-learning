import styles from '../../components/MultipleChoice/multipleChoice.module.css';

const MultipleChoice = props => {
    const { choices } = props;

    return (
        <div className={styles.container}>
            <p className={styles.question}>{choices.question}</p>
            {choices.choices.map((choice, idx) => {
                return (
                    <label className={styles.label} key={idx}>
                        <input type='radio' value={idx} name={choices.name} />
                        <span>{choice}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default MultipleChoice;

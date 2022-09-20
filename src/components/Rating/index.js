import styles from '../../components/Rating/Rating.module.css';

const MultipleChoice = props => {
    const { choices } = props;

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tablehead}> </th>
                        {choices.choices.map((choice, idx) => {
                            return <th className={styles.tablehead}>{choice}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {choices.questions.map((question, idx) => {
                        return (
                            <tr>
                                <th className={styles.tabledata}>{question.question}</th>

                                {choices.choices.map((choice, idx) => {
                                    return (
                                        //<label className={styles.option} key={idx}>
                                        <td className={styles.border}>
                                            <input type='radio' value={idx} name={question.id} />
                                        </td>
                                        // </label>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MultipleChoice;

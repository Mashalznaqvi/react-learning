import styles from './Question_Answer.module.css';

const Question_Answer = ({ label }) => {
    return (
        <div className={styles.container}>
            <div>
                <label className={styles.question}>{label}</label>
            </div>
            <div>
                <textarea className={styles.textarea} type='text' />
            </div>
        </div>
    );
};

export default Question_Answer;

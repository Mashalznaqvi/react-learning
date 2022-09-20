import styles from './textBox.module.css';

const TextBox = ({ label, handleChange, width, height }) => {
    return (
        <div className={styles.container}>
            <label
                className={styles.label}
                style={{
                    height: `${height}`,
                    width: `${width}`,
                }}
            >
                {label}
            </label>
            <input
                type='text'
                className={styles.textbox}
                style={{
                    height: `${height}`,
                    width: `${width}`,
                }}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextBox;

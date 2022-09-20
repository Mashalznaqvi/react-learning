import { Link } from 'react-router-dom';
import styles from './button.module.css';

const index = ({ text, color, colorCenter, height, width, link, handleClick }) => {
    return (
        <>
            <Link to={link}>
                <button
                    className={styles.button}
                    style={{
                        height: `${height}`,
                        width: `${width}`,
                        backgroundImage: `linear-gradient(to right, ${color} 0%, ${colorCenter}  51%, ${color}  100%)`,
                    }}
                    onClick={handleClick}
                >
                    {text}
                </button>
            </Link>
        </>
    );
};

export default index;

import styles from './map.module.css';
import char1 from '../../assets/images/mainCharacter.png';

const Map = () => {
    return (
        <div className={styles.container}>
            <img src={char1}></img>

            <map name='gamemap'>
                <area shape='circle' coords='337, 300, 44' href='www.geeksforgeeks.org'></area>
            </map>
        </div>
    );
};

export default Map;

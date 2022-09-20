import styles from './menu.module.css';
import Button from '../../components/Button';
import pic from '../../assets/images/mainCharacter.png';

const Menu = () => {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.heading}>Game Menu</span>
                <Button
                    text='Start Game'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/intro'
                />
                <Button
                    text='Game Map'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='/map'
                />
                <Button text='Quit Game' color='#EB3349' colorCenter='#F45C43' height='2.5rem' width='9rem' link='/' />
            </div>
            <img src={pic} alt='shark' className={styles.character}></img>
        </>
    );
};

export default Menu;

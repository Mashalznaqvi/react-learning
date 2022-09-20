import styles from './levelintro.module.css';
import { useState } from 'react';
import narratiobbox from '../../assets/images/narrationBG.png';
import Character from '../../components/Character';

import Button from '../../components/Button';

const LevelIntro = props => {
    const { dialouge, backgroundUrl, heading, right, left, characterLeft, characterRight, link } = props;

    const [text, setText] = useState(dialouge[0].text);
    const [count, setCount] = useState(0);

    const handleOnClick = () => {
        setCount(count + 1);
        setText(dialouge[count + 1].text);
    };

    return (
        <>
            <div
                className={styles.container}
                style={{
                    backgroundImage: `url(${backgroundUrl})`,
                }}
            >
                <span className={styles.heading}>{heading}</span>
                <div
                    className={styles.box}
                    style={{
                        background: `url(${narratiobbox}) no-repeat center`,
                        backgroundSize: 'contain',
                    }}
                >
                    {text}
                </div>
                {count >= dialouge.length - 1 ? (
                    <Button
                        text='Start Level'
                        color='#F09819'
                        colorCenter='#ebdc5c'
                        height='2.5rem'
                        width='9rem'
                        link={link}
                    />
                ) : (
                    <button className={styles.button} onClick={handleOnClick}>
                        Next
                    </button>
                )}
            </div>
            {right && (
                <Character
                    character={characterRight}
                    top='6rem'
                    right='8rem'
                    scaleX='-1'
                    rotate='-8deg'
                    position={dialouge[count].position === 'right' ? 'right' : ''}
                />
            )}
            {left && (
                <Character
                    character={characterLeft}
                    bottom='6rem'
                    left='8rem'
                    scaleX='1'
                    rotate='1deg'
                    position={dialouge[count].position === 'left' ? 'left' : ''}
                />
            )}
        </>
    );
};

export default LevelIntro;

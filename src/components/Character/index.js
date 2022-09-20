import React from 'react';
import styles from './character.module.css';

const index = ({ character, position, left, right, top, bottom, isAnimated, scaleX, rotate }) => {
    return (
        <img
            src={character}
            alt='Character'
            className={`${styles.character} ${position === 'right' && styles.character_animation_top} ${
                position === 'left' && styles.character_animation_bottom
            }`}
            style={{
                top: `${top}`,
                bottom: `${bottom}`,
                left: `${left}`,
                right: `${right}`,
                transform: `scaleX(${scaleX}) rotate(${rotate})`,
            }}
        />
    );
};

export default index;

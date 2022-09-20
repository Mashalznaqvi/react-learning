import TextBox from '../../components/TextBox';
import styles from './signup.module.css';
import Button from '../../components/Button';
import DragAndDrop from '../../components/Dnd';
import Drag from '../../components/Dnd2';
import { useState } from 'react';

const Signup = () => {
    const [user, setUser] = useState({
        motherName: '',
        monthOfBirth: '',
        fathername: '',
        placeOfBirth: '',
        userName: '',
    });

    return (
        <div className={styles.container}>
            <span className={styles.heading}>Enter Details to start game</span>
            <form className={styles.form}>
                <TextBox
                    label="First two letters of the mother's name"
                    value={user.motherName}
                    handleChange={e => {
                        setUser({ ...user, motherName: e.target.value });
                    }}
                />
                <TextBox
                    label='Month of your birth'
                    value={user.monthOfBirth}
                    handleChange={e => setUser({ ...user, monthOfBirth: e.target.value })}
                />
                <TextBox
                    label="Last two letters of the father's name"
                    value={user.fathername}
                    handleChange={e => setUser({ ...user, fathername: e.target.value })}
                />
                <TextBox
                    label='First letter of the place of birth'
                    value={user.placeOfBirth}
                    handleChange={e => setUser({ ...user, placeOfBirth: e.target.value })}
                />

                <Button
                    text='Sign Up'
                    color='#F09819'
                    colorCenter='#ebdc5c'
                    height='2.5rem'
                    width='9rem'
                    link='menu'
                    handleClick={() =>
                        setUser({
                            ...user,
                            userName: user.motherName + user.monthOfBirth + user.placeOfBirth + user.fathername,
                        })
                    }
                />
            </form>
            <p>{user.userName}</p>
        </div>
    );
};

export default Signup;

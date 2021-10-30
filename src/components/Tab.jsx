import React, { useState } from 'react';
import styles from './Tab.module.css';

const Tabs = (props) => {
    const [tabs, setTabs] = useState([]);
    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    const TabHandler = (e, index) => {
        e.preventDefault();
        setTabs(index);
        setHasBeenClicked( true );

    }
    return (
        <fieldset>
            <legend>App.js</legend>
            <div className={styles.container}>
                <div className={styles.first} onClick={(e) => TabHandler(e, 1)} value={tabs} > Tab 1 </div>
                <div className={styles.second} onClick={(e) => TabHandler(e, 2)} value={tabs}> Tab 2 </div>
                <div className={styles.third} onClick={(e) => TabHandler(e, 3)} value={tabs}> Tab 3 </div>
            </div>
            <div className={styles.content}>
                { !hasBeenClicked && <p className={styles.p}> ↑ Start by clicking on a tab above ↑</p> }
                {tabs === 1 && <p>This is content for tab 1 😊</p>}
                {tabs === 2 && <p>This is content for tab 2 😊 </p>}
                {tabs === 3 && <p>This is content for tab 3 😊 </p>}
            </div>
        </fieldset>
    )
}

export default Tabs;
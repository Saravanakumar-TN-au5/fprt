import React, { Component } from 'react';
import styles from './Task.module.scss';

class Task extends Component {
    render() {
        let {name, status} = this.props.task
        return (
            <div className={styles['container']}>
                <p className={styles['head']}>{name}</p>
            </div>
        )
    }
}

export default Task;
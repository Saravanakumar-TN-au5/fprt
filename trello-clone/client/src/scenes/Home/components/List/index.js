import React, { Component } from 'react';
import styles from './List.module.scss';
import Task from './../Task';
import { connect } from 'react-redux';
import { updateListHead } from './../../../../redux/actions';

class List extends Component {
    state = {
        headInput: React.createRef(),
        editHead: false
    }
    editHead() {
        this.setState({editHead: true}, () => {
            this.state.headInput.current.focus();
            this.state.headInput.current.select();
        });
    }
    saveHead(e, id) {
        const cb = () => {this.setState({editHead: false})};
        this.props.updateHead(id, e.target.value, cb);
    }
    render() {
        let {_id, name, tasks} = this.props.listItem
        return (
            <section className={styles['container']}>
                <div className={styles['head']} onClick={() => this.editHead()}>
                    {this.state.editHead ? 
                    <input type='text' className={styles['head-input']} 
                    defaultValue={name} ref={this.state.headInput}
                    onBlur={(e) => this.saveHead(e, _id)}/>:
                    name}
                </div>
                <div>
                    {tasks ? tasks.map(task => {
                        return <Task task={task} key={task._id} listId={_id}/>
                    }): ''}
                </div>
                <div className={styles['add-btn']}>+ Add task</div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHead: (id, updatedHead, cb) => dispatch(updateListHead(id, updatedHead, cb))
    }
}
export default connect(null, mapDispatchToProps)(List);
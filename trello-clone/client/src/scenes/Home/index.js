import React, { Component } from 'react';
import styles from './Home.module.scss';
import List from './components/List';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <section className={styles['container']}>
                {this.props.lists.map(listItem => {
                    return <List listItem={listItem} key={listItem._id}/>
                })}
                <section className={styles['head']}>+ Add list</section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(Home);
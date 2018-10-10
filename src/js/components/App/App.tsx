import React, { Component } from 'react'
import { connect } from 'react-redux'

import FilterButton from '../FilterButton'
import styles from './styles.css'
import { CryptCard } from '../../utils/interfaces/cards'
import { CryptCardList } from '../CardList'
import { State } from '../../utils/interfaces/common'


interface AppProps {
  cryptCards: CryptCard[];
  dispatch: Function;
  mainDisplay: string;
}

class App extends Component<AppProps, {}> {
  render() {
    return (
      <div>
        <header className={styles.header}>Vampire: The Deck Builder</header>
        <div className={styles.columnWrapper}>
          <div className={styles.sideColumn}>
            <div className={styles.content}>
              <FilterButton onClick={() => null} label="My label" hoverLabel="Remove" />
              <CryptCardList />
            </div>
          </div>
          <div className={styles.mainColumn}>
            {this.props.mainDisplay}
          </div>
          <div className={styles.sideColumn}>
            koo
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State/*, ownProps*/) => ({
  cryptCards: state.cryptCards,
  mainDisplay: state.mainDisplay,
})

const mapDispatchToProps = (dispatch: Function) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


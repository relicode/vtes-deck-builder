import React, { Component } from 'react'
import { connect } from 'react-redux'

import cryptCardSelector from '../../selectors/crypt-cards'
import styles from './styles.css'
import { CryptCard } from '../../utils/interfaces/cards'
import { FILTERS_SET_CRYPT_BY_NAME, MAIN_DISPLAY_CRYPT_CARD } from '../../actions/types'


interface CryptCardListProps {
  cards: CryptCard[];
  dispatch: Function;
}

interface State {
  cryptCards: CryptCard[];
  mainDisplay: string;
}

class CryptCardListClass extends Component<CryptCardListProps, {}> {
  constructor(props: CryptCardListProps) {
    super(props)
    this.handleNameFilter = this.handleNameFilter.bind(this)
  }

  handleNameFilter(ev: any) {
    this.props.dispatch({
      type: FILTERS_SET_CRYPT_BY_NAME,
      name: ev.target.value,
    })
  }

  render() {
    return (
      <div>
        <input id="eeh" type="text" onChange={this.handleNameFilter}></input>
        <label htmlFor="eeh">Name: </label>
        <ul>
          {this.props.cards.map((card: CryptCard) => (
            <li
              className={styles.listItem}
              key={`${card.name}-${card.advanced}`}
              onMouseEnter={() => {
                this.props.dispatch({
                  type: MAIN_DISPLAY_CRYPT_CARD,
                  display: JSON.stringify(card, null, 4)
                })
              }}
            >
              {card.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  cards: cryptCardSelector(state),
})

const mapDispatchToProps = (dispatch: Function) => ({
  dispatch,
})

const CryptCardList = connect(mapStateToProps, mapDispatchToProps)(CryptCardListClass)

export {
  CryptCardList,
}

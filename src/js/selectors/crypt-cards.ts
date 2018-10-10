import { CryptCard } from '../utils/interfaces/cards'


const cryptCardSelector = (state: any) => {
  const cryptCardFilters = state.filters.crypt
  const nameFilter: string = cryptCardFilters.name

  const nameFilteredCards = state.cryptCards.filter((card: CryptCard) => (
    new RegExp(nameFilter, 'i').test(card.name)
  ))
  
  return nameFilteredCards
}

export default cryptCardSelector
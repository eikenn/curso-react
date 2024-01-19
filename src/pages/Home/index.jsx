import { Pokemon } from '../../components/Pokemon'
import PokemonLogo from '../../assets/images/pokemon_logo.png'
import styles from './styles.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={PokemonLogo} alt="Pokemon Logo" />
      <Pokemon name="Pikachu"/>
      <Pokemon name="Charmander"/>
      <Pokemon name="Charizard"/>
      <Pokemon name="Squirtle"/>
      <Pokemon name="Ditto"/>
    </div>
  )
}

import { Component } from 'react/cjs/react.production.min';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
    // тут применяем синтаксис полей классов, т.е. state это как this.state и тд.
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        const items = arr.map(item => {
            const { name, thumbnail, id } = item;
            let availableImg = thumbnail.slice(-13, -4);
            let thumbnailStyle = {};

            if (availableImg === 'available') {
                thumbnailStyle = { objectFit: 'contain' };
            }

            return (
                <li
                    className="char__item"
                    key={id}
                    onClick={() => this.props.onCharSelected(id)} >
                    <img src={thumbnail} alt={name} style={thumbnailStyle} />
                    <div className="char__name">{name}</div>
                </li>
            )
        });

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {
        const { charList, loading, error } = this.state;
        // console.log(charList);
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;
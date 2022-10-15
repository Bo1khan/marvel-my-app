import { Component } from "react/cjs/react.production.min";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    // тут применяем синтаксис полей классов, т.е. state это как this.state и тд.
    state = {
        selectedChar: null
    }

    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <div className="char__content">
                        <CharList onCharSelected={this.onSelectedChar} />
                        <CharInfo charId={this.state.selectedChar} />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;
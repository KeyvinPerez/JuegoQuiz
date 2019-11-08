import React, {Component} from 'react';
import Button from './button';
import GeneralConstant from '../constants/general_constant';
import AboutGame from './about-game';

export default class MenuStart extends Component {
    constructor(props) {
        super();
        this.state = {
            aboutGame: false,
            tutorial: false
        };
    }
    
    showDialog() {
        this.setState({
            aboutGame: true
        }); 
    }

    showDialogTutorial() {
        this.setState({
            tutorial: true
        }); 
    }

    hideDialog() {
        this.setState({
            aboutGame: false,
            tutorial: false
        }); 
    }

    tutorial() {
        return (
            <div className="tutorialStep">
                <ul>
                    <ol>1. Ingrese su nombre y haga clic en COMENZAR</ol>
                    <ol><img src="/images/tutorial/01.png" /></ol>
                    <ol>2. Elija respuesta o solicite ayuda</ol>
                    <ol><img src="/images/tutorial/02.png" /></ol>
                    <ol>3. Placas es una opción de ayuda </ol>
                    <ol><img src="/images/tutorial/03.png" /></ol>
                    <ol>4. Se pueden elegir otras opciones de ayuda </ol>
                    <ol><img src="/images/tutorial/04.png" /></ol>
                    <ol>5. Cada vez que lo haces bien, obtienes 50 puntos </ol>
                    <ol><img src="/images/tutorial/05.png" /></ol>
                    <ol>6. Área que muestra los elementos que acertó y equivocó </ol>
                    <ol><img src="/images/tutorial/06.png" /></ol>
                    <ol>8. Si comete un error, aparecerá un cuadro de diálogo con la respuesta correcta </ol>
                    <ol><img src="/images/tutorial/07.png" /></ol>
                    <ol>9. Si no obtiene el mínimo del 85% del total de preguntas, intente nuevamente. </ol>
                    <ol><img src="/images/tutorial/08.png" /></ol>
                    <ol>10. Si alcanzas el mínimo del 85%, ¡ganas! </ol>
                    <ol><img src="/images/tutorial/09.png" /></ol>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="startPage">
                <div className="menuStart">
                    <h1>PROYECTO FINAL DESARROLLO WEB</h1>
                    <div>
                        <img src="/images/autobus-escolar-05.gif" />
                    </div>
                    <div>
                        <input type="text" name="" placeholder="Digite su nombre" onChange={this.props.changeName} />
                        <Button title={GeneralConstant.button.START} 
                            btnType="btnStart" 
                            clickCallback={this.props.showMenuStart} />
                    </div>
                </div>
                <a className="aboutGameLink" onClick={ () => { this.showDialog() } } href="#">{GeneralConstant.ABOUT_GAME_TITLE}</a>
                <a className="tutorial" onClick={ () => { this.showDialogTutorial() } } href="#">{GeneralConstant.TUTORIAL}</a>
                {this.state.aboutGame ? <AboutGame closeDialog={() => { this.hideDialog() }} message={GeneralConstant.ABOUT_GAME} /> : ''}
                {this.state.tutorial ? <AboutGame classTutorial="areaTutorialStep" closeDialog={() => { this.hideDialog() }} message={this.tutorial()} /> : ''}
            </div>
        );
    }

}
import React from 'react'
import Poruka from './Poruka'
import Kontakti from './Kontakti'

class Forma extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ime: '',
            broj: '',
            kontakti: [],
            poruka: ''
        }
    }
    handleIme(e) {
        this.setState({
            ime: e.target.value
        })
    }
    handleBroj(e) {
        this.setState({
            broj: e.target.value
        })
    }
    handleClick() {
        if (this.state.ime.trim() === '' || this.state.broj.trim() === '') {
            this.setState({
                poruka: 'Ime i broj ne mogu biti prazni'
            })
        }
        else if (!this.state.broj.startsWith('+')) {
            this.setState({
                poruka: 'Broj mora biti unet u formatu +xxx xxxxxxxxx'
            })
        }
        else {
            this.setState({
                poruka: ''
            })
            let kontakt = {
                ime: this.state.ime,
                broj: this.state.broj
            }
            this.state.kontakti.push(kontakt)
        }
    }

    reset() {
        this.setState({
            ime: '',
            broj: ''
        })
    }

    inputFilter(e) {
        let filtrirani = this.state.kontakti.filter((kontakt) => kontakt.ime.includes(e.target.value));
        this.setState({
            kontakti: filtrirani
        })
       
        
    }
    
    render() {
        return (
            <>
                <div>
                    <input type="text" onChange={(e) => this.handleIme(e)} value={this.state.ime} placeholder="Ime i prezime" />
                    <input type="text" onChange={(e) => this.handleBroj(e)} value={this.state.broj} placeholder="Broj telefona" />
                    <button onClick={() => { this.handleClick(); this.reset() }}>Dodaj kontakt</button>
                </div>
                <div>
                    <Poruka poruka={this.state.poruka}></Poruka>
                </div>
                <div>
                    <>
                        <h3>Lista kontakata:</h3>
                        <Kontakti kontakti={this.state.kontakti}></Kontakti>
                    </>
                </div>
                <input type="text" onChange={(e) => this.inputFilter(e)} placeholder="Pronadji kontakt"></input>
            </>
        )
    }
}

export default Forma
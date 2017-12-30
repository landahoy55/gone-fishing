import React from 'react';
import moment from 'moment';
import SimpleMap from './Map';

//local component state necessary, the session isn't in the redux store until saved.
export default class SessionForm extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
            //if the session exists then use the props, if not use default
            note: props.session ? props.session.note : '',
            numberCaught: props.session ? props.session.numberCaught : '',
            sessionStart: props.session ? props.session.sessionStart : moment().valueOf(),
            lat: props.session ? props.session.lat : '',
            long: props.session ? props.session.long : ''
       }
       //console.log('session form state lats');
       //console.log(this.state.lat);
   }

    noteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
        //console.log(this.state.note)
    };

    catchCountChange = (e) => {
        const numberCaught = e.target.value;
        //regex set to ints, no letters
        if (numberCaught.match(/^\d*/)) {
            this.setState(() => ({ numberCaught }))
            console.log(this.state.numberCaught)
        }
    };

    onSubmit = (e) => {
        e.preventDefault()

        //could this be refactored as a factory? based on number in??

        if(this.state.numberCaught == 0 || !this.state.numberCaught){
            console.log('nothing caught - submitted');
            //submit with 0, set didCatch to false, set endtime
            //create session onSubmit prop that is passed down
            this.props.onSubmit({
                didCatch: false,
                numberCaught: 0,
                sessionStart: this.state.sessionStart,
                sessionEnd: moment().valueOf(),
                note: this.state.note
            })
            //redirect to dashboard
            
        } else {

            console.log('fish caught - submitted');
            //submit numberCaught and set didCatch to true
            //create session onSubmit prop that is passed down
            this.props.onSubmit({
                didCatch: this.state.didCatch,
                numberCaught: this.state.numberCaught,
                sessionStart: this.state.sessionStart,
                sessionEnd: moment().valueOf(),
                note: this.state.note
            })
            //redirect to dashboard

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Note"
                        autoFocus
                        value={this.state.note}
                        onChange={this.noteChange}
                    />
                    <input
                        type="number"
                        placeholder="Caught"
                        value={this.state.numberCaught}
                        onChange={this.catchCountChange}
                    />
                    <button>Finish Session</button>
                </form>
                <br/>
                <SimpleMap lat={this.props.lat || this.state.lat} long={this.props.long || this.state.long}/>
            </div>
        )
    }
}
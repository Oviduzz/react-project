import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'Ovidiu',
    phone: '0753 444 555'
},
{
    id: 2,
    name: 'Alex',
    phone: '0753 231 555'
},
{
    id: 3,
    name: 'Jeff',
    phone: '0753 444 222'
},
{
    id: 4,
    name: 'Tim',
    phone: '0722 4334 555'
}
]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact List</h1>
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

render(<App contacts={contacts} />, document.getElementById('app'));

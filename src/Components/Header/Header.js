import React, { Component } from 'react';
import './header.css';
import Select from 'react-select';
import UVULogo from '../../images/UVU-logo-white.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            roomOptions: [
                {value: 401, label: '401'},
                {value: 402, label: '402'},
                {value: 403, label: "403"},
                {value: 404, label: '404'},
                {value: 405, label: '405'},
            ],
            selectedRoomOption: '',
            proOptions: [
                {value: "Hatch", label: 'Hatch'},
                {value: "Harper", label: 'Harper'},
                {value: "Smith", label: "Smith"},
                {value: "McQueen", label: 'McQueen'},
                {value: "Trump", label: 'Trump'},
            ],
            selectedProOption: '',
        }
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleProChange = this.handleProChange.bind(this);
    }

    handleRoomChange(selectedRoomOption) {
        this.setState({ selectedRoomOption });
        console.log(`Option selected:`, selectedRoomOption);
    }

    handleProChange(selectedProOption) {
        this.setState({ selectedProOption });
        console.log(`Option selected:`, selectedProOption);
    }

    render(){
        const { roomOptions, selectedRoomOption, proOptions, selectedProOption } = this.state;
        return (
        <div className="header-wrap">
            <div className='logo'>
                <img src={UVULogo} alt="uvu logo" class="uvu-logo"/>
            </div>
            <div className='nav'>
                <Select
                    placeholder="Select Room"
                    value={selectedRoomOption}
                    onChange={this.handleRoomChange}
                    options={roomOptions}
                    className='room-select'
                />
                <Select
                    placeholder="Select Professor"
                    value={selectedProOption}
                    onChange={this.handleProChange}
                    options={proOptions}
                    className='pro-select'
                />
            </div>
        </div>
        );
  }
}

export default Header;
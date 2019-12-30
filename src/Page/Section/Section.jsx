import * as React from 'react';
import './Section.css';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className='section'>
                <div className='section-header' onClick={() => this.toggle()}>
                    {this.props.header}
                    <div className='section-header-toggle'>{this.state.open ? '-' : '+'}</div>
                </div>
                {this.state.open && <div className='section-content'>{this.props.children}</div>}
            </div>
        );
    }
}
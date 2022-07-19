import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';
import { addMember } from './../actions/dragonActions';

class DragonList extends React.Component {
  state = {
    newMember: '',
    // members: [
    //   { name: 'Jojo Zhang', dragonStatus: true },
    //   { name: 'Brandon Harris', dragonStatus: false }
    // ]
  };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = ()=> {
      this.props.addMember(this.state.newMember); // addMember includes the dispatch!!
  }

  render() {
    console.log("props in DragonList:", this.props)
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (stateFromStore) => {
  console.log("stateFromStore in DragonList:", stateFromStore)
  return {
    members: stateFromStore.dragonReducer.members
  }
}
export default connect(mapStateToProps, { addMember })(DragonList);

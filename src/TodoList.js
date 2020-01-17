import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    const {inputValue, changeInputValue, handleClick, list, handleDelete} = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={changeInputValue}
          />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return <li key={index} onClick={handleDelete.bind(index)}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: "click_btn"
      };
      dispatch(action);
    },
    handleDelete(index){
      const action = {
        type: "delete_item",
        index: index
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

import React from 'react';
import {connect} from "react-redux";
import './App.css';
import NewForm from "./components/NewForm";
import {LoadSome, LoadMore, filterColumn,pushFormOnStore} from "./actions/actions";
import CollapsibleTable from "./components/Forms";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addNewForm: false}
    }

    LoadSome() {
        this.props.LoadSome()

    }

    LoadMore() {
        this.props.LoadMore()
    }

    render() {
        return (<>
                <div className="App">
                    <div>
                        <button onClick={() => this.LoadSome()}>Some</button>
                        <button onClick={() => this.LoadMore()}>More</button>
                        <button onClick={() => this.setState({addNewForm: !this.state.addNewForm})}>addRow</button>
                        {this.state.addNewForm ? <NewForm pushFormOnStore={this.props.pushFormOnStore} forms={this.props.forms}/> : ''}
                    </div>
                    {/*<Table {...this.props}*/}
                    {/*       forms={this.props.forms}/>*/}
                    {this.props.isFetching ? <div className="preloader"></div> : ""}
                    {this.props.forms[0] ?
                        <CollapsibleTable filterColumn={this.props.filterColumn} forms={this.props.forms} sortRow={this.props.sortRow}/>
                        : ''}
                </div>
            </>
        );
    }
};
const mapStateToProps = (state) => ({
    forms: state.formReducer.formData,
    isFetching: state.formReducer.isFetching,
    sortRow: state.formReducer.sortRow,
});
export default connect(mapStateToProps, {
    LoadSome, LoadMore, filterColumn,pushFormOnStore
})(App);

import React from "react";
import { connect } from 'react-redux';
import { filterUser } from "../actions/FilterAction";
import { FormControl } from 'react-bootstrap';
import { debounce } from 'throttle-debounce';


class Filter extends React.Component {
    filter() {
        this.props.filterUser(this.filterName.value);
    }

    render() {
        return (
            <FormControl
                type="text"
                placeholder="Enter text"
                inputRef={ref => { this.filterName = ref; }}
                onChange={
                    debounce(1000,
                        this.filter.bind(this)
                    )
                }
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterUser: name => dispatch(filterUser(name)),
    }
};

const mapStateToProps = state => {
    return {
        users: state.users.filter(user => user.name.includes(state.filterUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
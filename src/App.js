// in App.js
import React, { Component } from 'react';
import buildGraphcoolProvider from 'ra-data-graphcool';
import { Admin, Resource, Delete } from 'react-admin';

import ApolloClient from "apollo-boost";

import {BusinessList, BusinessEdit, BusinessCreate} from './business';

const client = new ApolloClient();

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphcoolProvider({ clientOptions: { uri: 'https://api.yelp.com/v3/graphql', header: {'Authorization': 'Bearer k6Mwzc7QNv1vg1aUwAHQzBGe4AlDoU0KuslJlenhPaSX_ikbarWvvciZZt7ZB3Dd9UYE0Xn3_W6E0gr6SXgF2rWeS8LdFXDiaU_WM2TdBudJ-TxAMla9cnfaKIMDXXYx'}}})
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="Business" list={BusinessList} create={BusinessCreate} edit={BusinessEdit}  />
            </Admin>
        );
    }
}

export default App;
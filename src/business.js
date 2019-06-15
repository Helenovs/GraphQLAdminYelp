import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';

export const BusinessList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

const BusinessTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};


export const BusinessEdit = (props) => (
    <Edit title={<BusinessTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const BusinessCreate = (props) => (
    <Create title="Create a Business" {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

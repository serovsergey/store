import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import Catalog from '../../common/Catalog'
//import {useAuth} from '../../../../context/auth_old';
import { Button } from '@material-ui/core';

const columns = [
    {name: 'id', align: 'right', title: 'Код', width: 70}, 
    {name: 'parent_id', align: 'right', title: 'Родитель', width: 100}, 
    {name: 'is_group', align: 'center', title: 'Группа', width: 80},  
    {name: 'created_at', align: 'center', title: 'Добавлено', width: 170}, 
    {name: 'updated_at', align: 'center', title: 'Изменено', width: 170}, 
    {name: 'children', align: 'center', title: 'Потомки', width: 100}
];

export default function ProductsMain(){

    return (
        <div style={{height: 'calc(100vh - 48px)', display: 'flex', flexDirection: 'column', paddingRight: '2px', marginLeft: '0px'}}>
            <Catalog catName='products' columns={columns}/>
        </div>
    );
}

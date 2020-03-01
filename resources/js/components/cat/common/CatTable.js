import React, { Component } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CatTableHead from './CatTableHead';
import CatTableRows from './CatTableRows';
import { Typography, Box, Table, TableHead, TableBody } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class CatTable extends Component {
    constructor(props) {
   
        super(props);

        this.onColumnResize = this.onColumnResize.bind(this);

        this.catName = props.catName;
        
        this.state = {
            selectedRow: props.InitialSelectedRow,
            columns: props.columns,
            sortBy: null
        };
        //console.log(this.props);
      }

    componentDidMount() {

    }

    componentWillUnmount(){

    }

    onColumnResize(idx, newWidth) {
        //console.log('onColumnResize(', idx, ', ', newWidth, ')')
        this.setState((state) => {
            return {
                columns: state.columns.map(
                    (column, i) => (i == idx ? {...column, width: newWidth} : column)
                )
            }
        })
    }

    render() {
        //console.log('CatTable render ', this.props)
        //console.log('total width='+this.state.columns.reduce((sum, col) => (sum + col.width), 4), 'px');
        return (
            <Table
                padding = 'checkbox'
                size='small' 
                style={{
                    cursor: 'cell', 
                    //userSelect: 'none',
                    tableLayout: 'fixed',
                    width: 'fit-content'
                    //width: this.state.columns.reduce((sum, col) => (sum + col.width), 4) + 'px'
                }}
                className = 'catTable unselectable'
            >
                <TableHead>
                    <CatTableHead 
                        columns = {this.state.columns}
                        onColumnResize = {this.onColumnResize}
                    />
                </TableHead>
                <TableBody>
                    {this.props.rows == null ? 
                        (
                            <TableRow>
                                <TableCell 
                                    padding = 'none' 
                                    colSpan={this.state.columns.length}
                                >
                                    <LinearProgress />
                                </TableCell>
                            </TableRow>
                        ) :   
                        (
                            <CatTableRows 
                                onExpand = {this.props.onExpand}
                                onCollapse = {this.props.onCollapse}
                                onNavigate = {this.props.onNavigate}
                                selectedRow = {this.props.selectedRow}
                                selectedCol = {this.props.selectedCol}
                                columns = {this.state.columns}
                                sortBy = {this.state.sortBy}
                                level={0}
                                rows = {this.props.rows}
                                focused = {this.props.focused}
                            /> 
                        )
                    }
                </TableBody>
            </Table>
        )
    }
}
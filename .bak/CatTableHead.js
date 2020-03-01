import React, { Component, Fragment } from 'react';
import { Box, Typography, TableRow, TableCell, TableSortLabel} from '@material-ui/core';

import { useState, useEffect } from "react";

export default class CatTableBody extends Component {
    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        this.state = {
            resizingColumn: null,
            x: 0,
            startWidth: 0,
            startX: 0
        }
      }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
    }

    onMouseDown(e){
        const th = e.target.closest('th');
        //console.log(e.target);
        const bcr = th.getBoundingClientRect()
        //console.log('onMouseDown, resizingColumn=', th.cellIndex, ', startX=', window.event.clientX, ', startWidth=',bcr.right - bcr.left)
        this.setState({resizingColumn: th.cellIndex, startX: window.event.clientX, startWidth: bcr.right - bcr.left})
        //console.log('onMouseDown', th.cellIndex);
    }

    onMouseUp(e){
        this.setState(() => {return {resizingColumn: null}})
        //console.log('onMouseUp');
    }

    onMouseMove(e){
        //console.log('onMouseMove', e);
        
        this.setState((state) => {
            if(state.resizingColumn != null) {
                const newWidth = e.clientX - state.startX + state.startWidth;
                if(newWidth > 0) 
                    this.props.onColumnResize(state.resizingColumn, newWidth);
                return null;
            }
            else return null;
        })
    }

    render() {
        return (
            <TableRow 
                style={{
                    backgroundColor: 'lightskyblue',
                    cursor: this.state.resizingColumn !=null ? 'col-resize' : 'cell',
                }}
            >
                {this.props.columns.map((column, i) => (
                    <TableCell
                        key={column.name}
                        padding= 'none'
                        style={{
                            width: this.props.columns[i].width +'px', 
                            position: 'sticky', 
                            top: 0, 
                            backgroundColor: 'inherit',
                        }}
                        align='center' 
                    >
                        <TableSortLabel
                            active = {this.props.sortBy === column.name}
                        >
                            <Typography>
                                {column.title}
                            </Typography>
                            
                        </TableSortLabel>
                        <span 
                            className='CatTableDivider'
                            style={{backgroundColor: this.state.resizingColumn == i ? 'grey' : 'inherit'}}
                            onMouseDown = {this.onMouseDown}
                        />
                    </TableCell>
                ))}
            </TableRow>
        );
    }
}
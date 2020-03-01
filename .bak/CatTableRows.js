import React, { Component, Fragment } from 'react';
import {TableRow, TableCell} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
//import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RemoveIcon from '@material-ui/icons/Remove';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

export default class CatTableRows extends Component {
    constructor(props) {
    
        super(props);
        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onCellClick = this.onCellClick.bind(this);
      } 

    componentDidMount() {

    }

    onCellClick(e){
        const td = e.target.closest('td');
        const tr = td.parentElement;
        this.props.onNavigate(tr.dataset.id, td.colSpan == 1 ? td.cellIndex : null, e.target);
    }

    onExpand(e){
        this.props.onExpand(e.target.closest('tr').dataset.id, e.ctrlKey);
        //this.props.onExpand(e);
    }

    onCollapse(e){
        this.props.onCollapse(e.target.closest('tr').dataset.id);
        //this.props.onExpand(e.target.closest('tr').dataset.id);
    }
    render() {
        //const totalWidth = this.props.columnsWidths.reduce((sum, w) => sum + w, 0);
        //console.log(this.props)
        return (
            this.props.rows.map((row) => (
                <Fragment key={row.id}>
                    <TableRow style={(this.props.selectedRow == row.id) ? {backgroundColor: 'aliceblue'} : {}} 
                        data-id = {row.id}
                    >
                        {this.props.columns.map((column, i) => (
                            (!row.is_group || column.name == 'title') && (
                                <TableCell
                                    key={column.name}
                                    //padding = 'checkbox'
                                    style={{
                                        borderRight: '1px solid silver', 
                                        paddingLeft: column.name == 'title' ? 1.25*this.props.level+'rem' : null, 
                                        outline: ((i == this.props.selectedCol || row.is_group) && this.props.selectedRow == row.id ? '1px dashed black' : 'none')
                                    }}
                                    //className = {(i == this.props.selectedCol || row.is_group) && this.props.selectedRow == row.id ? 'selectedCell' : null} 
                                    align={column.align}
                                    onClick = {this.onCellClick}
                                    colSpan={row.is_group ? (this.props.columns.length) : 0}
                                    >
                                    {row.is_group && column.name == 'title' ? (
                                        <div 
                                            style={{display: 'flex', fontWeight: row.is_group ? 'bold' : 'inherit'}}
                                            //onDoubleClick = {(row.children && row.children > 0) ? (row.expanded ? this.onCollapse : this.onExpand) : null }
                                            onDoubleClick = {(row.expanded ? this.onCollapse : (row.children) ? this.onExpand : null)}
                                            data-d={'row.expanded='+row.expanded+', row.children='+row.children}
                                        >   
                                        {row.is_group && ( 
                                            Array.isArray(row.children) || row.children > 0 ? (
                                                row.expanded ? (
                                                    //<RemoveCircleOutlineIcon 
                                                    <ExpandMoreIcon
                                                        alt = '-'
                                                        fontSize='small' 
                                                        style={{cursor: 'pointer'}}
                                                        onClick = {this.onCollapse}
                                                    />
                                                ) : (
                                                    //<AddCircleOutlineIcon
                                                    <ChevronRightIcon
                                                        alt = '+'
                                                        fontSize='small' 
                                                        style={{cursor: 'pointer'}}
                                                        onClick = {this.onExpand}
                                                    />
                                                )
                                            ) : (
                                                //<RadioButtonUncheckedIcon
                                                <RemoveIcon
                                                    fontSize='small' 
                                                />
                                            )
                                        )}
                                        {row.title}<sub style={{marginLeft: '2px', color: 'blue'}}>{row.id}</sub>
                                    </div>
                                    ) : (
                                        <>{row[column.name]}</>
                                    )}
                                </TableCell>
                            )
                        ))} 
                    </TableRow>
                    {row.expanded && (
                        Array.isArray(row.children) ? (
                            <CatTableRows 
                                onExpand = {this.props.onExpand}
                                onCollapse = {this.props.onCollapse}
                                onNavigate = {this.props.onNavigate}
                                selectedRow = {this.props.selectedRow}
                                selectedCol = {this.props.selectedCol}
                                columns = {this.props.columns}
                                sortBy = {this.props.sortBy}
                                level={this.props.level + 1}
                                rows = {row.children}
                            />
                        ) : (
                            <TableRow>
                                <TableCell 
                                    padding = 'none' 
                                    colSpan={row.is_group ? (this.props.columns.length) : 0}
                                >
                                    <LinearProgress/>
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </Fragment>
            ))
        )
    }
}
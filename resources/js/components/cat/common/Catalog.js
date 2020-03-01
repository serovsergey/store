import React, { Component, useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { makeStyles} from '@material-ui/core/styles';
import { Button, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CatTable from './CatTable';
import CreateNewFolderTwoToneIcon from '@material-ui/icons/CreateNewFolderTwoTone';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import SyncIcon from '@material-ui/icons/Sync';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

//import { AuthContext } from "../../../context/auth_old";

function Catalog(props){
    const [rows, setRows] = useState([]);
    const [columnsWidths, setColumnsWidths] = useState(props.columns.map(({name, width}) => ({[name]: width}))); 

    // Object deep cloning
    //var clone=(function(t,s,c){for(c=0;c<t.length;)t[c++]=s.call(new t[c++]());return c=function(o,h,i,r,x){h=h||[];if(o&&typeof o=="object"){for(i=0;i<h.length;i++)if(h[i]===o)return h[i+1];r={};x=s.call(o);for(i=0;i<t.length;i+=2)if(t[i]==x)r=i?new t[i+1](o):[];h.push(o,r);for(i in o)if(h.hasOwnProperty.call(o,i))r[i]=c(o[i],h)}return r||o}})([,Array,,Date,,Number,,String,,Boolean],({}).toString);

    const clone = require('rfdc')({ proto: false, circles: false })
    

    function loadChildren(id, expanded, refresh) {
        //console.log('loadChildren, id=', id)
        axios
            .get("api/catalog/"+props.catName+'/get-children/'+id)
            .then(({ data }) => {
                //console.log("api/catalog/"+this.props.catName+'/get-children/'+id, data)
                let modRows = clone(rows);
                console.log(modRows);
                updateRows(modRows, data.map((row) => {
                    if(row.is_group) return Object.assign(row, {expanded: false})
                    else return row;
                }), id, expanded, refresh);
                //console.log('modRows = ', modRows);
                setRows(modRows);
                return// {rows: modRows};
                
                this.setState((state, props) => {
                    if(id==0) return {rows: data}
                    else {
                        let modRows = state.rows;
                        this.updateRows(modRows, data.map((row) => {
                            if(row.is_group) return Object.assign(row, {expanded: false})
                            else return row;
                        }), id, expanded, refresh);
                        //console.log('modRows = ', modRows);
                        return {rows: modRows};
                    }
                });
            })
            .catch((error) => (console.log(error)));
    }

    function updateRows(oldRows, newRows, id, expanded = false, refresh = false){
        console.log('updateRows =====================');
        console.log('id=', id, ', expanded=', expanded, ', refresh=', refresh);
        console.log('oldRows=', oldRows);
        console.log('newRows=', newRows);
 
        for (let idx = 0; idx < oldRows.length; idx++){
            //console.log('for: ', oldRows[idx])
            if(oldRows[idx].id == id){
                //console.log('row.id == id');
                if(expanded != null) {
                    oldRows[idx].expanded = expanded;
                }
                if(refresh && Array.isArray(oldRows[idx].children) && newRows == null){
                    oldRows[idx].children = 1;
                }
                //console.log(oldRows[idx].children);
                if (newRows && (oldRows[idx].children > 0 || (Array.isArray(oldRows[idx].children) && refresh))) {
                    //console.log('oldRows[idx].children = newRows');
                    oldRows[idx].children = newRows;
                }
                //console.log('return oldRows');
                return true;
                //return oldRows;
            }
            if(Array.isArray(oldRows[idx].children)) {
                //console.log('recursive ====================');
                if (updateRows(oldRows[idx].children, newRows, id, expanded, refresh)) return true;

                //return oldRows;
                //return this.updateRows(oldRows[idx].children, newRows, id, expanded, refresh);
            }
        }
            //console.log('end for')
    }

    useEffect(() => {
        loadChildren(0);
    }, [])

    return (
        <pre>{/*JSON.stringify(clone(props.columns), null, 2)*/}
        <br/>
        {JSON.stringify(columnsWidths, null, 2)}
        </pre>
    )
}

export default Catalog;

class Catalog2 extends Component {

    constructor(props) {
   
        super(props);
// TODO выделить параметры колонок в отдельный стейт, остальное перенести в пропсы
        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
        this.loadChildren = this.loadChildren.bind(this);
        this.updateRows = this.updateRows.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        //this.onTableBlur = this.onTableBlur.bind(this);
        //this.onTableFocus = this.onTableFocus.bind(this);
        this.onTableKeyPress = this.onTableKeyPress.bind(this);

        this.classes = makeStyles({
            root: {
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px',
            },
          });

        this.columns = [{name: 'title', align: 'left', title: 'Наименование', width: 200}].concat(props.columns);
        
        this.catName = props.catName;
        this.state = {
            rows: null,
            selectedRow: 1,
            selectedCol: 1, 
            focused: false,
            token: null
        }

        this.myRef = React.createRef();
      }

    componentDidMount() {
        this.loadChildren(0);
        //console.log(this.myRef);
        // this.myRef.current.addEventListener('blur', this.onTableBlur);
        // this.myRef.current.addEventListener('focus', this.onTableFocus);

        this.myRef.current.addEventListener('keydown', this.onTableKeyPress);
    }

    componentWillUnmount(){
        // this.myRef.current.removeEventListener('blur', this.onTableBlur);
        // this.myRef.current.removeEventListener('focus', this.onTableFocus);

        this.myRef.current.removeEventListener('keydown', this.onTableKeyPress);
    }

    // onTableBlur(){
    //     this.setState({focused: false})
    //     this.myRef.current.removeEventListener('keydown', this.onTableKeyPress);
    // }

    // onTableFocus(){
    //     this.setState({focused: true})
    //     this.myRef.current.addEventListener('keydown', this.onTableKeyPress);
    // }

    getNextRow(rows, current){
        for(let i=0; i < rows.length; i++){
            if(rows[i].id == current) { // found current
                if(rows[i].expanded && rows[i].children.length) {  // if it expanded and have children
                    return rows[i].children[0].id;
                } else {
                    if(i == rows.length - 1) return current;
                    else return rows[i + 1].id;
                }
            } else {
                if(rows[i].children.length || rows[i].expanded) {
                    const next = this.getNextRow(rows[i].children, current);
                    if(next == current) {
                        if(i == rows.length - 1) return current;
                        else return rows[i + 1].id;
                    } else if(next != null) return next;
                }
            }
        }
        return null;
    }

    getPrevRow(rows, current){
        let f = false;
        for(let i = rows.length - 1; i >= 0; i--){
            let row = rows[i];
            if(f) {
                let tmpRows = row.expanded && row.children;
                if(Array.isArray(tmpRows)){
                    do {
                        if(tmpRows[tmpRows.length-1].expanded)
                            tmpRows = tmpRows[tmpRows.length-1].children
                    } while(Array.isArray(tmpRows[tmpRows.length-1]) && 
                            tmpRows[tmpRows.length-1].expanded) 
                    return tmpRows[tmpRows.length-1].id;
                } else return row.id;
            } else if(row.id == current) { // found current
                if(i == 0) return row.parent_id;
                f = true;
            } else {
                if(row.children.length && row.expanded) {
                    const prev = this.getPrevRow(row.children, current);
                    if(prev != null) return prev;
                }
            }
        }
        return null;
    }

    onTableKeyPress(e){
        //console.log(e.key);
        let row;
        this.setState((state) => {
            switch(e.key){
                case 'ArrowDown': 
                //e.preventDefault();
                    const next = this.getNextRow(state.rows, state.selectedRow);
                    if(next && next != state.selectedRow) {
                        //document.getElementsByClassName('selectedCell')[0].scrollIntoView();
                        return {selectedRow: next};
                    } else return null;
                    break;
                case 'ArrowUp': 
                //e.preventDefault();
                    const prev = this.getPrevRow(state.rows, state.selectedRow);
                    //console.log('ArrowUp prev=', prev)
                    if(prev && prev != state.selectedRow) {
                        //document.getElementsByClassName('selectedCell')[0].scrollIntoView();
                        return {selectedRow: prev};
                    } else return null;
                    break;
                case 'ArrowRight': 
                    row = this.getRow(state.rows, state.selectedRow);
                    if(row) {
                        if(row.children != 0 && !row.expanded) {
                            this.expand(state.selectedRow, state);
                        }
                        if(state.selectedCol + 1 < this.columns.length)
                            return {selectedCol: state.selectedCol + 1};
                    } else return null;
                    break;
                case 'ArrowLeft': 
                    row = this.getRow(state.rows, state.selectedRow);
                    if(row) {
                        if(row.expanded) {
                            this.collapse(state.selectedRow, state);
                        }
                        if(state.selectedCol > 0)
                            return {selectedCol: state.selectedCol - 1};
                    } else return null;
                    break;
            }
        })
    }

    onRefresh(){
        this.setState(() => (
            {rows: null}
        ))
        this.loadChildren(0);
    }

    updateRows(oldRows, newRows, id, expanded = false, refresh = false){
        //console.log('updateRows =====================');
        //console.log('id=', id, ', expanded=', expanded, ', refresh=', refresh);
        //console.log('oldRows=', oldRows);
        //console.log('newRows=', newRows);
 
        for (let idx = 0; idx < oldRows.length; idx++){
            //console.log('for: ', oldRows[idx])
            if(oldRows[idx].id == id){
                //console.log('row.id == id');
                if(expanded != null) {
                    oldRows[idx].expanded = expanded;
                }
                if(refresh && Array.isArray(oldRows[idx].children) && newRows == null){
                    oldRows[idx].children = 1;
                }
                //console.log(oldRows[idx].children);
                if (newRows && (oldRows[idx].children > 0 || (Array.isArray(oldRows[idx].children) && refresh))) {
                    //console.log('oldRows[idx].children = newRows');
                    oldRows[idx].children = newRows;
                }
                //console.log('return oldRows');
                return true;
                //return oldRows;
            }
            if(Array.isArray(oldRows[idx].children)) {
                //console.log('recursive ====================');
                if (this.updateRows(oldRows[idx].children, newRows, id, expanded, refresh)) return true;

                //return oldRows;
                //return this.updateRows(oldRows[idx].children, newRows, id, expanded, refresh);
            }
        }
            //console.log('end for')
    }

     loadChildren(id, expanded, refresh) {
        //console.log('loadChildren, id=', id)
        axios
            .get("api/catalog/"+this.props.catName+'/get-children/'+id)
            .then(({ data }) => {
                //console.log("api/catalog/"+this.props.catName+'/get-children/'+id, data)
                this.setState((state, props) => {
                    if(id==0) return {rows: data}
                    else {
                        let modRows = state.rows;
                        this.updateRows(modRows, data.map((row) => {
                            if(row.is_group) return Object.assign(row, {expanded: false})
                            else return row;
                        }), id, expanded, refresh);
                        //console.log('modRows = ', modRows);
                        return {rows: modRows};
                    }
                });
            })
            .catch((error) => (console.log(error)));
    }

    expand(id, prevState, refresh){
        if(refresh || !this.haveChildren(prevState.rows, id)){
            this.loadChildren(id, true, refresh);
            //return null;
        }
        let modRows = prevState.rows;
        this.updateRows(modRows, null, id, true, refresh)
        return {rows: modRows}
    }


    onExpand(id, refresh){
        this.setState((state, props) => {
            return this.expand(id, state, refresh);
        })   
    }

    collapse(id, prevState){
        let modRows = prevState.rows;
        this.updateRows(modRows, null, id, false)
        return {rows: modRows}
    }

    onCollapse(id){
        this.setState((state, props) => {
            return this.collapse(id, state);
        });
    }

    onNavigate(row, col, element){
        this.setState((state) => {
            return {
                selectedCol: col !== null ? col : state.selectedCol,
                selectedRow: parseInt(row)
            }
        })
        //element.scrollIntoView(element);
    }

    haveChildren(rows, id){
        return rows.some((row) => {
            if(row.id == id) return Array.isArray(row.children);
            if(Array.isArray(row.children)) {
                return this.haveChildren(row.children, id)
            }
            return false
        })
    }

    getRow(rows, id){
        for(let i = 0; i < rows.length; i++){
            if(rows[i].id == id) return rows[i];
            if(Array.isArray(rows[i].children)) {
                const row = this.getRow(rows[i].children, id);
                if(row) return row; 
            }
        }
        return null
    }

    render() {
        //console.log('Catalog render ', this.state)
        return (
            <Grid container alignItems="stretch" className={this.classes.root} 
                style={{
                    minHeight: '100px', 
                    minWidth: '400px', 
                    //border: this.state.focused ? '1px solid black' : '', 
                    boxShadow: '1px 1px 3px 0px black',
                    //overflow: 'auto',
                    //display: 'flex', 
                    height: '100%',
                    flexDirection: 'column',
                    flexWrap: 'nowrap'
                }}
            >
               <Grid container style={{borderBottom: '1px solid grey', padding: '2px'}}>
                       <ButtonGroup size='small'>
                        <Button title='Новый элемент' onClick={null}><PlaylistAddIcon /></Button>
                        <Button title='Новая группа' onClick={null}><CreateNewFolderTwoToneIcon /></Button>
                        <Button title='Редактировать'><EditTwoToneIcon /></Button>
                        <Button title='Удалить' onClick={null}><DeleteTwoToneIcon /></Button>
                        <Button onClick={this.onRefresh} title='Обновить'><SyncIcon /></Button>
                    </ButtonGroup>                        
                    {/*this.context.authTokens.token*/}
                </Grid>
                
                <Grid item sm={12} style={{overflow: 'auto'}} ref={this.myRef} tabIndex={5}>
                    <CatTable
                        catName={this.catName}
                        rows = {this.state.rows}
                        selectedCol = {this.state.selectedCol}
                        selectedRow = {this.state.selectedRow}
                        columns={this.columns}

                        onExpand = {this.onExpand}
                        onCollapse = {this.onCollapse}
                        onNavigate = {this.onNavigate}
                        onTableFocus = {this.onTableFocus}
                        onTableBlur = {this.onTableBlur}
                        focused = {this.state.focused}
                    />
                </Grid>
            </Grid>
        );
    }
}

//Catalog.contextType = AuthContext; 

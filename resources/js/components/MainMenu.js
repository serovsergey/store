import React, { Fragment, useState, useContext } from "react";
import { store } from '../store'
import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, Icon, Divider, Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CloseIcon from '@material-ui/icons/Close';
import MenuBookIcon from '@material-ui/icons/MenuBook'; //catalog
import SubtitlesIcon from '@material-ui/icons/Subtitles'; //document
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation'; //report
import ViewListIcon from '@material-ui/icons/ViewList'; //journal

function MainMenu(props) {
    const globalState = useContext(store);
    const [visible, setVisible] = useState(true);
    const [collapsedTypes, setCollapsedTypes] = useState(Object.keys(globalState.state.user.interface));

    const closeMenu = () => (
        null
    )

    const typeClick = (curType) => {
        if(collapsedTypes.includes(curType)) setCollapsedTypes(collapsedTypes.filter((val)=> (val!=curType)));
        else setCollapsedTypes([...collapsedTypes, curType]);
    }

    const getMetaTypeIcon = (objectName) => {
        switch (objectName) {
            case 'catalog'  : return <MenuBookIcon />
            case 'document' : return <SubtitlesIcon />
            case 'report'   : return <InsertInvitationIcon />
            default: return null;
        }
    }
    return ( 
        !globalState.state.user ? null : 
        <Drawer
            open={props.visible}
            onClose={() => (props.setVisible(false))}
        >
            <List dense>   
                {(Object.keys(globalState.state.user.interface)).map(metaType => (
                    <Fragment key = {metaType}>
                        <ListItem button divider dense style={{backgroundColor: 'lightskyblue'}} button data-type={metaType} onClick={() => (typeClick(metaType))}>
                            <ListItemIcon>{getMetaTypeIcon(metaType)}</ListItemIcon>
                            <ListItemText primaryTypographyProps={{variant: 'h6'}} primary={globalState.state.user.interface[metaType].ptitle}/>
                            {collapsedTypes.includes(metaType) ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        {globalState.state.user.interface[metaType].content && (
                            <Collapse in={collapsedTypes.includes(metaType)} timeout="auto" unmountOnExit>
                                <List dense disablePadding style={{paddingLeft: '0em'}}>
                                    {(Object.keys(globalState.state.user.interface[metaType].content)).map(object => (
                                        <ListItem dense button key = {object}>
                                            <ListItemText primary={globalState.state.user.interface[metaType].content[object]} />
                                            {metaType == 'document' && <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="new" title='Новый'>
                                                    <PostAddIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>}
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse >
                        )}
                    </Fragment>
                ))}
            </List>
        </Drawer>
    )
}

export default MainMenu;
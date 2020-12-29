import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import '../styles/sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SideBarOptions from './SideBarOptions';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function SideBar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
                Compose
            </Button>

            <SideBarOptions Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SideBarOptions Icon={StarIcon} title="Starred" number={54} />
            <SideBarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SideBarOptions Icon={LabelImportantIcon} title="Important" number={54} />
            <SideBarOptions Icon={NearMeIcon} title="Sent" number={54} />
            <SideBarOptions Icon={NoteIcon} title="Drafts" number={54} />
            <SideBarOptions Icon={ExpandMoreIcon} title="More" number={54} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar

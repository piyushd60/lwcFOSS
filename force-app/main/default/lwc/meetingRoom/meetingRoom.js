import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {name:'A-01', capacity:'12'};

    @api showRoomInfo = false;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick',{detail :this.meetingRoomInfo});
        this.dispatchEvent(tileClicked);
    }
}
import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoom;

    meetingRooms = [
        {name :'A-0122', capacity : '2ur'},
        {name :'A-0123', capacity : '2qu'},
        {name :'A-0124', capacity : '2uw'},
        {name :'A-0125', capacity : '2eu'}
    ];

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail; 
        this.selectedMeetingRoom = meetingRoomInfo.name;
        //eslint-disable no-console
        console.log(this.selectedMeetingRoom);
    }
}
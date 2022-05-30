import 'bootstrap/dist/css/bootstrap.min.css';

export default function Seat(props){
    return (<>
    {props.booked&&<span className="badge bg-secondary">{props.seatNo}</span>}
    {!props.booked&&<span className="badge badge bg-primary">{props.seatNo}</span>}
    </>);
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
export default function BusRegistration(props) {
    const [seats, setState] = useState([
        [
            {
                name: "A1",
                booked: false,
            },
            {
                name: "A2",
                booked: false,
            },
            {
                name: "A3",
                booked: false,
            },
            {
                name: "A4",
                booked: false,
            },
            {
                name: "A5",
                booked: false,
            },
            {
                name: "A6",
                booked: false,
            },
            {
                name: "A7",
                booked: false,
            },
            {
                name: "A8",
                booked: false,
            },
            {
                name: "A9",
                booked: false,
            },
            {
                name: "A10",
                booked: false,
            },], [
            {
                name: "A11",
                booked: false,
            },
            {
                name: "A12",
                booked: false,
            },
            {
                name: "A13",
                booked: false,
            },
            {
                name: "A14",
                booked: false,
            },
            {
                name: "A15",
                booked: false,
            },
            {
                name: "A16",
                booked: false,
            }, {
                name: "A17",
                booked: false,
            }, {
                name: "A18",
                booked: false,
            }, {
                name: "A19",
                booked: false,
            }, {
                name: "A20",
                booked: false,
            }
        ]
    ]);
    const [lseats,setStatel] = useState([
        [
            {
                name: "B1",
                booked: false,
            },
            {
                name: "B2",
                booked: false,
            },
            {
                name: "B3",
                booked: false,
            },
            {
                name: "B4",
                booked: false,
            },
            {
                name: "B5",
                booked: false,
            },
            {
                name: "B6",
                booked: false,
            },
            {
                name: "B7",
                booked: false,
            },
            {
                name: "B8",
                booked: false,
            },
            {
                name: "B9",
                booked: false,
            },
            {
                name: "B10",
                booked: false,
            }
        ],
        [
            {
                name: "B11",
                booked: false,
            },
            {
                name: "B12",
                booked: false,
            },
            {
                name: "B13",
                booked: false,
            },
            {
                name: "B14",
                booked: false,
            },
            {
                name: "B15",
                booked: true,
            },
            {
                name: "B16",
                booked: false,
            }, {
                name: "B17",
                booked: false,
            }, {
                name: "B18",
                booked: false,
            }, {
                name: "B19",
                booked: false,
            }, {
                name: "B20",
                booked: true,
            }
        ]]);
    return (<>
        <table className="table">
            <tbody>
                {
                    seats.map((rows) => {
                        return (
                            <tr key={seats.indexOf(rows)}>
                                {
                                    rows.map((seat) => {
                                        return <td key={seat.name}>
                                            {seat.booked&&<button type="button" className="btn btn-outline-dark" disabled>{seat.name}</button>}
                                            {!seat.booked&&<button type="button" className="btn btn-outline-danger" onClick={()=>{setStatel((prevState)=>{
                                                const seatx = [...prevState];
                                                console.log(seatx[seats.indexOf(rows)][rows.indexOf(seat)].booked);
                                                seatx[seats.indexOf(rows)][rows.indexOf(seat)].booked = !seatx[seats.indexOf(rows)][rows.indexOf(seat)].booked
                                                return [...seatx] 
                                            })}}>{seat.name}</button>}
                                        </td>
                                    })
                                }
                            </tr>
                        );
                    })
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {
                    lseats.map((rows) => {
                        return (
                            <tr key={lseats.indexOf(rows)}>
                                {
                                    rows.map((seat) => {
                                        return <td key={seat.name}>
                                            {seat.booked&&<button type="button" className="btn btn-outline-dark" disabled>{seat.name}</button>}
                                            {!seat.booked&&<button type="button" className="btn btn-outline-danger" onClick={()=>{setStatel((prevState)=>{
                                                const seatx = [...prevState];
                                                console.log(seatx[lseats.indexOf(rows)][rows.indexOf(seat)].booked);
                                                seatx[lseats.indexOf(rows)][rows.indexOf(seat)].booked = !seatx[lseats.indexOf(rows)][rows.indexOf(seat)].booked
                                                return [...seatx] 
                                            })}}>{seat.name}</button>}
                                        </td>
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>);
} 
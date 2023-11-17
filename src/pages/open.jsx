import React from 'react'
import './open.css'

export default function Open() {
    //make it loop undil its done every day or something idk - change the innerhtml to {with something in it to access the object.day.hours}
  return (
    <div>
        <table className='table'>
            <tr>
                <th>Day</th>
                <th>Opening Hours</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td>6am - 10pm</td>
            </tr>
        </table>
    </div>
  )
}

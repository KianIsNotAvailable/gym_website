import React from 'react'
import './open.css'

export default function Open() {

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
            <tr>
                <td>Tuesday</td>
                <td>6am - 10pm</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>6am - 10pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>6am - 10pm</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>6am - 10pm</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>8am - 9pm</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>8am - 9pm</td>
            </tr>
        </table>
    </div>
  )
}

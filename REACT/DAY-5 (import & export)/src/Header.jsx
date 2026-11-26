import React from 'react'

export default function Header() {
  return (
    <div>Header</div>
  )
}  // agar humko component ke samne hi export default karna hua toh function wala component ke saath karenge nahi ke arrow function ke saath


function Card1() {
  return (
    <div>this is card1</div>
  )
}
function Card2() {
  return (
    <div className='card'>this is card2</div>
  )
}
export function Card3() {
  return (
    <div className='card2'>this is card3</div>
  )
} // isko naming export kehte hai with one line 

export {
  Card1,
  Card2
} // isko bhi naming export kehte hai through object

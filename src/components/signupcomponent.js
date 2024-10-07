import React from 'react'

export default function signupcomponent(props) {
  return (
    <section>
    <div>
      <h2>{props.dig.email}</h2>
      <h2>{props.dig.password}</h2>    
    </div>
    </section>     
  )
}

import React from 'react'

export default function Planets() {
    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
    ]
    
    const hasGas = planets.map((planet, key) => !planet.isGasPlanet && <li key={key}>{planet.name}</li>
    )
  return (
    <div>
      {/* {planets.map((planet, key) => {
       if(planet.isGasPlanet) return <li key={key}>{planet.name}</li>
      })} */}
      {hasGas}
    </div>
  )
}

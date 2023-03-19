import React from 'react'

export default async function api(value) {

    console.log(value)

    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=51787c87b7a44fb6b97112833231903&q=${value}&aqi=no`)
    const res = await data.json()
    const result = await res
    return result



}

import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Api from '../Api/api'


function Page() {

    const [click, setClick] = useState(false)
    const [city, setCity] = useState('London')
    const location = useRef()
    const { error, isLoading, data } = useQuery({
        queryKey: ['posts', city],
        queryFn: () => Api(city)
    })


    function AddedCity() {
        let city = location.current.value
        setCity(city)
        setClick(false)


    }
    if (isLoading) return <h2>Loading...</h2>

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className='page'>

            {
                <>


                    {

                        (click === true ? <> <input ref={location} type="text" className='input' placeholder='Add City' /> <button className='selectCity' onClick={AddedCity}>Add</button></> : <button className='addBtn' onClick={() => setClick(true)}>+</button>)

                    }

                    <div className='mainapp'>
                        <div className='temp'>
                            <h1>{data?.current.temp_c}</h1>
                            <span>&#8451;</span>
                        </div>
                        <img src={data?.current.condition.icon} className='icon' />
                        <h2>{data?.location.name}</h2>
                        <div className='details'>
                            <h4>cloud</h4>
                            <p>{data?.current.cloud}</p>
                        </div >

                        <div className='details'>
                            <h4>Feels Like</h4>
                            <p>{data?.current.feelslike_c}</p>
                        </div>
                        <div className='details'>
                            <h4>Humidity</h4>
                            <p>{data?.current.humidity}</p>
                        </div>
                        <div className='details'>
                            <h4>Wind Kph</h4>
                            <p>{data?.current.wind_kph}</p>
                        </div>



                    </div>

                </>

            }

        </div>
    )
}

export { Page }



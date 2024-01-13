import React from 'react';
import GetServerData from './getDataServer';
import ClientComp from './clientComp';


// https://jsonplaceholder.typicode.com/todos/


const Testdata = () => {
  return (
    <div>
      <GetServerData/>
    </div>
  )
}
export default Testdata;


/*
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function Datas() {

    const url = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const tojson = await url.json()
    setData(tojson)
    setLoading(false)
  }
  useEffect(() => {
    Datas()
  }, [])

*/


/*
 export async function getData() {
  'use server'

  const url = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const tojson = await url.json()
  return {
    props: {
      data: tojson
    }
  }
}
 */
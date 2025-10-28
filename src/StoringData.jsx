import React,{useState} from 'react'

export default function storingData() {
    const [name,setName] = useState("React")
    const [year,setYear] = useState(2002)
    const [myself,setMyself] = useState({name: "ravidas",age:25,gender:"male"})
    const [marks,setMarks] = useState([12,34,56,78,90])
  return (
    <div>storingData
    <p>{name}</p>
    <p>{year}</p>
    <p>{myself.name} {myself.age}</p>
    {/* <p>{marks[0]} {marks[1]} {marks[2]}</p> */}
    {
        marks.map((i)=>(
            <div>
                <p>hi</p>
                <span>{i} </span>
            </div>
        ))
    }
    </div>
  )
}
export function SecondComponent(){
    return(
        <p>second component</p>
    )
}
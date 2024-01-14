
import Button from './Button'

const ButtonList = (props) => {
    const list=["Game" ,"shows","Music","Music", "Gaming", "All"]
    return (
        <>
        {/* <div className='flex gap-14 '>
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Music"/>
            <Button name="Game shows"/>
            <Button name="Music"/>
            <Button name="Music"/>
            <Button name="Game shows"/>
        </div> */}
        {
            list.map((item,index)=>
            <Button name={item} key={index}/> )
        }
        </>
        
    )
}

export default ButtonList
//one is the upper code it is not looking good , 
//what you can do is that you can do a map out of it right 

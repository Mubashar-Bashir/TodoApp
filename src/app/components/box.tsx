import React from 'react'
import Items from './items';

function Box(props:any)  
{
  // Reverse the array before mapping to display the latest items first
  const reversedData = props.data.slice().reverse();

  const items = reversedData.map((singleData: any, index: any) => {
     // Generate a color based on the unique identifier (key or id)
     const itemColor = getItemColor(singleData.item);

     // Apply the color as a background style
     const itemStyle = { backgroundColor: itemColor };
 
     return (
      <>
      {/* <div>
    {props.data.map((singleData:any, index:any) => (
      <div key={index} id={index} style={itemStyle} className='my-2 p-2'>
        <Items
          removehandler={props.removehandler}  // Passing the removehandler prop
          key={index}
          id={index}
          item={singleData.item}
          time={singleData.time}
          className='items-reverse'
        />
      </div>
    ))}
  </div> */}
       <div  style={itemStyle} className='my-2 p-2 overflowY:scroll' >
         <Items removehandler={props.removeToDo} key={index} id={index} item={singleData.item} time={singleData.time} className='items-reverse'/>
       </div>
       </>
     );
   });
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% p-5 " style={{ maxHeight: '600px', overflowY: 'scroll' }}>
      <h1 className='font-semibold'>To Do Task List:</h1>
      {items}
    </div>
  )
}
// Function to generate a color based on the item's unique identifier
function getItemColor(identifier: any) {
  const letters = '0123456789ABCDEF';
  let color = '#';

  // Hash the identifier to get a unique color
  for (let i = 0; i < identifier.length; i++) {
    color += letters[(identifier.charCodeAt(i) + i) % 16];
  }

  return color;

}
export default  Box;
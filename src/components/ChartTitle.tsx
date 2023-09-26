import React, { useState, useEffect } from 'react'

export default function ChartsTitle(){

    const items = [
        {
          title: "Expenses",
          desc: "1450"
        },
        {
          title: "Total",
          desc: "1450"
        },
        {
          title: "Used",
          desc: "1450"
        },
        {
          title: "Month",
          desc: "2300"
        },
      ]
      

    return(
        <>
        {items.map((item, id) => (
                <div key={id} className='py-4'>
                  <p className='text-sm'>{item.title}</p>
                  <h4 className="text-gray-800 mr-8 font-semibold">
                    {item.desc}
                  </h4>
                </div>
              ))}
        </>
    )
}
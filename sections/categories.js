import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Categories = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <br />
            <Title title='Categories Of The Competition' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
         
        </div>
        <div className='button-container'>
            <a
              href='https://publuu.com/flip-book/240606/570887/page/1'
              target='_blank'
              rel='noopener noreferrer'
              className='rule-button'
            >
              Rule Book
            </a>
            
          </div>
      </section>
      <style jsx>{`
        .button-container {
          display: flex;
          justify-content: center;
          margin-top:60px;
          margin-bottom:60px;

      
        }

        

      
      `}</style>
    </>
  )
}

export default Categories

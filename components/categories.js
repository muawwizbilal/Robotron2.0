import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const Categories = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Categories' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='button-container'>
            <a
              href='https://drive.google.com/file/d/1nGjDWx8-YS_6oZROOvDotMnIiZUEjEMD/view'
              target='_blank'
              rel='noopener noreferrer'
              className='rule-button'
            >
              Rule Book
            </a>
            
          </div>
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

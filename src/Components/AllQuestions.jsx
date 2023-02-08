import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function AllQuestions({queData}) {
  const questionElement = queData.map((item)=>{
    const options = [...item.incorrect_answers,item.correct_answer]
    const optionArray = options.map(item=>{
      return {
        id: nanoid(),
        value: item
      }
    })
    return <Question key={nanoid()} question={item.question} optionArray={optionArray}/>
  })
  
  return (
    <div className='questions-container'>
        {questionElement}
    </div>
  )
}

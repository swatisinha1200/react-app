import React from 'react'
import "./Word.css";
import { CustomButton } from './CustomButton';
export const ButtonSec = ({
onWordCount,
  onCharCount,
  onSentenceCount,
  onParagraphCount,
  onClear,

}) => {
  return (
    <div className='btn'>
    <CustomButton label="Count Word" onClick={onWordCount}/>
    <CustomButton label="Count Character" onClick={onCharCount}/>
    <CustomButton label="Count Sentence" onClick={onSentenceCount}/>
    <CustomButton label="Count Paragraph" onClick={onParagraphCount}/>
      <CustomButton label="Clear Text" onClick={onClear}/>
    </div>
  )
}


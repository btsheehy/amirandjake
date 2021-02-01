import React from 'react'
import '../App.css'

interface Faq {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: `Didn't Jake and Amir end like... 8 years ago?`,
    answer: `Ummm...`,
  },
  {
    question: `Where did you get all the scripts from?`,
    answer: `From the wonderful work of Christopher Chu, Garrett Boatman, and the 
            <a target="_blank" href="https://reddit.com/r/jakeandamir">/r/jakeandamir</a> community. 
            All the scripts and video data used in this app are from 
            <a target="_blank" href="http://scripts.jakeandamir.com">scripts.jakeandamir.com</a>`,
  },
  {
    question: `How does this thing even have "Frequently Asked Questions" if you just released it?`,
    answer: '',
  },
  {
    question: `How'd you make this?`,
    answer: `I used Javascript to scrape all the data from the Jake and Amir Scripts site. 
                I put all that data in a Postgres database on AWS. The site is built with React.js
                and the backend in Node. The gif making portion itself is a Python script that utilizes
                MoviePy and ImageMagick`,
  },
  {
    question: `I noticed an issue with the site. What should I do?`,
    answer: `Please email me at <a href="mailto:jakeandamir@btsheehy.com">jakeandamir@btsheehy.com</a>
                and I'll take a look. Thanks!`,
  },
]

export default () => (
  <div id="faqs">
    <div>
      {faqs.map((q) => {
        return (
          <div className="card">
            <h3>{q.question}</h3>
            <p dangerouslySetInnerHTML={{ __html: q.answer }} />
          </div>
        )
      })}
    </div>
  </div>
)

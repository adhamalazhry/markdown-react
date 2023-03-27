import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setSarkdown] = useState('##markdonw preview')
  return (
    <main>
      <section className='markdown'>
        <textarea className="input"
         value={markdown}
        onChange={(e)=>{setSarkdown(e.target.value)}}>
        </textarea>
        <article className='result'> 
        <ReactMarkdown>
        {markdown}
        </ReactMarkdown>
        
        </article>
      </section>
    </main>
  )
}

export default App

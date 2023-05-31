import React from 'react';
import './App.css';
import { Button } from './components/button';
import CodePreview from '@uiw/react-code-preview';

function App() {
  return (
    <div className='py-20 px-8'>
      <div className="grid lg:grid-cols-2 gap-16 grid-cols-1">
        <div className='pt-4'>
          <div>
            <img className="h-11" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Tailwind Logo" />
          </div>
          <div className='mt-16'>
            <a href='#' className='inline-flex no-underline'>
              <span className="shadow-new-button border border-bluish text-text-blue font-semibold py-1 px-3 rounded-full bg-background-button">What's new</span>
              <span className="text-shipped-color font-medium ml-6 flex items-center">
                <span>Just shipped v0.1.0</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-icon-color ml-2 align-middle"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
              </span>
            </a>
            <h1 className="text-6xl font-bold mt-10">Supercharge your web applications</h1>
            <p className='text-shipped-color mt-6 text-2xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10">
              <Button buttonText='Documentation' size='x-small' />
              <a href="#" className="ml-6 font-semibold text-sm">View on GitHub <span aria-hidden="true">→</span></a></div>
            </div>
        </div>
        <div className='relative'>
        <div className='ml-40 mt-4 absolute transform skew-x-30 bg-transform border-2 border-transform h-shade w-full z-20'></div>
          <div className='absolute rounded-bl-3xl rounded-tl-3xl bg-right-box h-blue-box pl-16 pt-16 mt-10'>
            <CodePreview code={
              `import { useState } from 'react'
                  import { Switch } from '@headlessui/react'
                                
                  function Example() {
                  const [enabled, setEnabled] = useState(true)
                                
                  return (
                  <form action="/notification-settings" method="post">
                  <Switch checked={enabled} onChange={setEnabled} name="notifications">
                  {/* ... */}
                  </Switch>
                  <button>Submit</button>
                  </form>
                  )
                  }`}
              onlyEdit
              theme="dark"
              className='!z-30'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

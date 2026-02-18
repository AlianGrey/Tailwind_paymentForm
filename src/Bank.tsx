export function PaymentForm() {
  return (
    <div className="mx-auto my-0 h-screen flex items-center justify-center">
      <div className="p-5 w-full md:w-96 bg-[#0f1727] h-screen flex flex-col justify-top">
        <div className="text-blue-50 font-semibold"> Your balance</div>
        <div className="pb-3">
          <span className="bg-amber-300 rounded-full w-5.5 h-5.5 inline-block p-0 text-center text-yellow-600 italic font-bold">V</span>
          <span className="font-semibold  text-[22px]">  $1,878.67</span>
        </div>
        <button type="submit" className="bg-blue-500 p-2 rounded-md w-full text-[16px] font-semibold mb-10">+ Buy credits</button>
        <div className="font-semibold flex justify-between pb-5">
          <span className="">Payment cards</span>
          <span className="text-blue-400">+ Add card</span>
        </div>
        <ul className="flex gap-y-4 flex-col">
          <li className="flex justify-start gap-3">
            <img src="/visa.jpg" alt="Visa card" className="h-8.5"></img>
            <div>
              <span className="text-[14px]">Domen Kralj&nbsp;&nbsp;</span>   
              <span><button className="bg-blue-50 rounded-4xl text-blue-400 text-xs px-1.5 pb-0.5">Primary</button></span>
              <div className="text-[#777] text-[12px] font-semibold">**** 6775</div>
            </div>
            <div className="text-xs ml-auto"><i className="fa-solid fa-play "></i></div>
          </li>
          <li className="flex justify-start gap-3">
            <img src="/mastercard.jpg" alt="Visa card" className="h-8.5"></img>
            <div>
              <span className="text-[14px]">Debet card&nbsp;&nbsp;</span>   
              <span><button className="bg-blue-50 rounded-4xl text-blue-400 text-xs px-1.5 pb-0.5">Primary</button></span>
              <div className="text-[#777] text-[12px] font-semibold">**** 3009</div>
            </div>
            <div className="text-xs ml-auto"><i className="fa-solid fa-play "></i></div>
          </li>
        </ul>    
        <div className="bg-[#293840] p-2 rounded-[10px] text-xs mt-6">
          We are compliant with the payment card industry data security standard.
        </div>
      
      </div>
    </div>
  )
}



/*  <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
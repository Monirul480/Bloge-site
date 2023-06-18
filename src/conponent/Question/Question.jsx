import React from 'react';

const Question = () => {
    return (
      <div className="my-3">
        <h1 className="text-center font-bold">Question Answer</h1>
        <div>
          <h1 className="font-semibold">
            1. what is different Props vs state ?
          </h1>
            <p className='text-sm pl-3'>
                <span className='font-semibold'>Props : </span>
                Props is a component to Other component sed data. props always work child note send data.props immutable and props send all anything data <br/>
                <span className='font-semibold'>State : </span>
                State is Mutable and state store data. state is asynchronous .  you can define stares in the component itself
                </p>
          <h1 className="font-semibold">2. How does useState work?</h1>
            <p className='text-sm pl-3'>useState work. useState declare <span className='font-semibold'>State : const [state, setState] = useState(storValue)</span> useState stor data. when we store data thens call setState() under the data. and when we get data then call state argument.</p>
          <h1 className="font-semibold">3. Purpose of useEffect other than fetching data.</h1>
            <p className='text-sm pl-3'>The react useEffect examples of side effects include retrieving data. other han useEffect use when DOM updates, and timers update useEffect second argument call . then we use useEffect</p>
          <h1 className="font-semibold">4. How does react work ?</h1>
            <p className='text-sm pl-3'>React works by using a virtual DOM Document Object Model to efficiently update the UI in response to changes in data.</p>
        </div>
      </div>
    );
};

export default Question;
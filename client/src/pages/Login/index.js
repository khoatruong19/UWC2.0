import React from 'react';
import { mainTextColor } from '../../utils/constants';

const Login = () => {
  return (
    <div style={{ width: '500px', marginTop: '-3rem' }}>
      <h1
        className="text-center"
        style={{
          fontSize: '4.5rem',
          fontWeight: 'bold',
          marginBottom: '3rem',
          color: '#749F82',
        }}
      >
        UWC 2.0
      </h1>
      <form>
        <div
          className="pb-1.5 pt-1 px-3 flex flex-column w-100 rounded"
          style={{ backgroundColor: 'lightgreen' }}
        >
          <p
            className=" font-weight-bold font-bold mb-0"
            style={{ fontWeight: 'bolder', color: mainTextColor }}
          >
            ID
          </p>
          <input
            name={'ID'}
            // onChange={onChange}
            className="input w-100 mt-0"
            // type={type}
            required
          />
        </div>
        <div
          className="pb-1.5 pt-1 px-3 flex flex-column w-100 rounded"
          style={{ backgroundColor: 'lightgreen', marginTop: '1rem' }}
        >
          <p
            className="font-bold mb-0"
            style={{ fontWeight: 'bolder', color: mainTextColor }}
          >
            Password
          </p>
          <input
            name={'Password'}
            // onChange={onChange}
            className="input w-100 mt-0"
            // type={type}
            required
          />
        </div>
        <button
          className="py-4 px-3 flex flex-column w-100 rounded  align-items-center justify-content-center hover"
          style={{
            backgroundColor: '#749F82',
            marginTop: '1rem',
            border: 'none',
            textAlign: 'center',
          }}
        >
          <h4
            className="font-bold mb-0 "
            style={{ fontWeight: 'bold', color: mainTextColor }}
          >
            Login
          </h4>
        </button>
      </form>
    </div>
  );
};

export default Login;

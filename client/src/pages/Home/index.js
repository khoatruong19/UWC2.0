import { mainTextColor, mainGreen } from '../../utils/constants';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import AreaMap from '../../components/AreaMap';
import MCPModal from '../../components/modals/MCPModal';
import { useSelector } from 'react-redux';

const Home = () => {
  const [area, setArea] = useState([10.66, 106.67]);
  const areas = useSelector((state) => state.areas.areas);

  console.log({ areas });

  return (
    <div className="w-75 mx-auto" style={{ position: 'relative' }}>
      <div className="p-5">
        <p
          style={{
            fontSize: '2rem',
            color: mainTextColor,
            marginBottom: '2rem',
          }}
        >
          Welcome, <span style={{ fontWeight: 700 }}>Back Officer!</span>
        </p>
        <div className="d-flex align-items-center gap-3">
          <div
            className="flex-grow-1 p-3 rounded"
            style={{
              backgroundColor: mainGreen,
              height: '250px',
              minWidth: '400px',
            }}
          >
            <p className="text-center" style={{ fontSize: '3rem' }}>
              <span style={{ fontWeight: 700, fontSize: '3.5rem' }}>
                Wednesday
              </span>
              ,
              <br /> 27th October 2022
            </p>
          </div>

          <div
            className="flex-grow-1 px-5 py-3 rounded d-flex flex-wrap gap-5"
            style={{ backgroundColor: mainGreen, height: '250px' }}
          >
            <div
              className="d-flex align-items-lg-center gap-3"
              style={{ fontSize: '2.5rem' }}
            >
              <p style={{ color: mainTextColor, fontWeight: 700 }}>Janitors:</p>
              <p style={{ color: 'black', fontWeight: 700 }}>50</p>
            </div>
            <div
              className="d-flex align-items-lg-center gap-3"
              style={{ fontSize: '2.5rem' }}
            >
              <p style={{ color: mainTextColor, fontWeight: 700 }}>
                Collectors:
              </p>
              <p style={{ color: 'black', fontWeight: 700 }}>50</p>
            </div>
            <div
              className="d-flex align-items-lg-center gap-3"
              style={{ fontSize: '2.5rem' }}
            >
              <p style={{ color: mainTextColor, fontWeight: 700 }}>Areas:</p>
              <p style={{ color: 'black', fontWeight: 700 }}>50</p>
            </div>
            <div
              className="d-flex align-items-lg-center gap-3"
              style={{ fontSize: '2.5rem' }}
            >
              <p style={{ color: mainTextColor, fontWeight: 700 }}>MCPs:</p>
              <p style={{ color: 'black', fontWeight: 700 }}>50</p>
            </div>
          </div>
        </div>
        <Form.Select
          aria-label="Default select example"
          style={{
            width: '150px',
            marginTop: '1rem',
            border: `2px solid ${mainGreen}`,
            color: mainTextColor,
            fontWeight: 700,
            fontSize: '1.2rem',
          }}
          onChange={(e) => {
            const pos = JSON.parse(e.target.value);
            setArea([pos.lat, pos.lng]);
          }}
        >
          {areas &&
            areas.map((item, i) => {
              return (
                <option key={i} value={JSON.stringify(item.bounds[0][0])}>
                  {item.name}
                </option>
              );
            })}
        </Form.Select>
        <div
          style={{
            width: '100%',
            marginTop: '1rem',
            position: 'relative',
          }}
        >
          <AreaMap areas={areas} area={area} />
        </div>
      </div>
    </div>
  );
};

export default Home;

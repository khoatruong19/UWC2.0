import React from 'react'

const ChooseRoute = () => {
    const [area, setArea] = useState([10.66, 106.67]);
    const areas = useSelector((state) => state.areas.areas);

    console.log({ areas });

    return (
        <div className="w-100 mx-auto" style={{ position: 'relative', marginTop: '2.5rem' }}>
            <div className='container'>

                <div class=''>
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <h1
                    className="text-center"
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        color: mainTextColor,
                    }}
                >
                    <span style={{ fontWeight: 700 }}>Choose Route</span>
                </h1>
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
                    <AreaMap routing areas={areas} area={area} />
                </div>
                <div className="w-100 mx-auto" style={{ position: 'relative', marginTop: '-3rem' }}>
                    <h2
                        className="text-left"
                        style={{
                            fontSize: '1.75rem',
                            marginBottom: '1rem',
                            color: mainTextColor,
                        }}
                    >
                        <span style={{ fontWeight: 700 }}>Assigned to</span>
                        <span class='border'></span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ChooseRoute;
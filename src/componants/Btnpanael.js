export default function Btnpanel(props) {

    function handleclick(pro) {
        props.send(pro)
    }

    return (
        <div className="btn">
            <h5>button panel</h5>
            <ul className="grid">
                <li onClick={() => { handleclick("all") }}>Home</li>
                <li onClick={() => { handleclick("desktop") }}>Desktop</li>
                <li onClick={() => { handleclick("laptop") }}>Laptop</li>
                <li onClick={() => { handleclick("mobile") }}>Mobile</li>
                <li onClick={() => { handleclick("#") }}>About</li>
            </ul>
        </div>
    )
}
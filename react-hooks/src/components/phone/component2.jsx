import { usePhone } from "../../contexts/phone";

export default function Component2() {
    const { phone, setPhone } = usePhone();

    return (
        <div style={{backgroundColor: '#bfffbd', padding: '10px'}}>
            <h2>Component 2</h2>
            <h4>{phone}</h4>
        </div>
    );
}
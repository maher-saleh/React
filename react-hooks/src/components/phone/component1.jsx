import { usePhone } from "../../contexts/phone";

export default function Component1() {
    const { phone } = usePhone();

    return (
        <div style={{backgroundColor: '#c3e7ff', padding: '10px'}}>
            <h2>Component 1</h2>
            <h4>{phone}</h4>
        </div>
    );
}
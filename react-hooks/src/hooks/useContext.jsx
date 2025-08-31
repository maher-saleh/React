import Component1 from "../components/phone/component1";
import Component2 from "../components/phone/component2";
import { PhoneProvider, usePhone } from "../contexts/phone";

export default function UseContextHook(){

    function PhoneInput() {
        const { setPhone } = usePhone();

        return (
            <div style={{ padding: '20px' }}>
                <p>Changing phone number will be applied to all nested components using useContext</p>
                <label htmlFor="">Phone # </label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
            </div>
        );
    }

    return (
        <PhoneProvider>
            <PhoneInput />
            <Component1 />
            <Component2 />
        </PhoneProvider>
    );
}
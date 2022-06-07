import { useState, useContext } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore'; 
import CartContext from '../../context/CartContext';
import Loader from '../../components/Loader/Loader';
import ButtonReturn from '../../components/ButtonReturn/ButtonReturn';
import CheckIcon from '../../assets/garrapata.png'
import './Checkout.css';

const Checkout = () => {

    const { productList, totalPrice, clear } = useContext(CartContext)
    const [loading, setLoading] = useState(false); 
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({ Nombre:'', Apellido:'', Email:'', Telefono:'' });
    const { Nombre, Apellido, Email, Telefono } = buyer;

    const generatingOrder = async(data) => {
        setLoading(true);
        try {
            const db = getFirestore();
            const itemCollection = collection(db, 'Orders');
            const order = await addDoc(itemCollection, data);
            setOrderId(order.id);
            clear();
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handlerInputs = (element) => {
        setBuyer(({ ...buyer, [element.target.name] : element.target.value }))
    }

    const handlerSubmit = (element) => {
        element.preventDefault();

        const items = productList.map(element => { 
            return { 
                id: element.id, 
                title: element.title, 
                price: element.price, 
                quantity: element.quantity 
            }});
        const date = new Date();
        const total = totalPrice();
        const data = { buyer, items, date, total};

        console.log('data', data);
        generatingOrder(data);
    }

    return (
            <div className='checkout-container'>
                { loading ? <Loader />
                : (!orderId && <div className='checkout-form'>
                    <h1>Completá tus datos:</h1>
                    <form onSubmit={handlerSubmit}>
                        <input type='text' name='Nombre' placeholder='Nombre' value={Nombre} onChange={handlerInputs} className='checkout-input' />
                        <input type='text' name='Apellido' placeholder='Apellido' value={Apellido} onChange={handlerInputs} className='checkout-input' />
                        <input type='email' name='Email' placeholder='Email' value={Email} onChange={handlerInputs} className='checkout-input' />
                        <input type='text' name='Telefono' placeholder='Telefono' value={Telefono} onChange={handlerInputs} className='checkout-input' />
                        <input type='submit' value='Finalizar compra' className='buy-button' />
                    </form>
                </div>
                )
                }
                <div>
                {
                    orderId && (
                        <div className='successful-operation'>
                            <div className='success-title'>
                                <img src={CheckIcon} className='check-icon' alt='imgIcon'/>
                                <h1>¡Tu compra ha sido exitosa!</h1>
                            </div>
                            <h4>Código de compra: {orderId}</h4>
                            <ButtonReturn />
                        </div>
                    )
                }
                </div>
            </div> 
    );
};

export default Checkout;
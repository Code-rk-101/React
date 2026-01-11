import {createStore} from "redux"

const INITIAL_VALUE = 
{
    counter: 0,
    private_toggle: false
}

const counterRuducer = (Store = INITIAL_VALUE,action)=>
{
    let newCounterStore = Store;
    
    if(action.type === "INCREMENT" && Store.private_toggle === false)
    {
        newCounterStore =
        {
            ...Store,
            counter: Store.counter + 1
        }   
    }
    else if(action.type === "DECREMENT" && Store.private_toggle === false)
    {
        newCounterStore =
        {
            ...Store,
            counter: Store.counter - 1
        }   
    }
    else if(action.type === "ADD" && Store.private_toggle === false)
    {
        newCounterStore = 
        {
            ...Store,
            counter: Store.counter + Number(action.payload.num)
        }
    }
    else if(action.type === "SUBTRACT" && Store.private_toggle === false)
    {
        newCounterStore = 
        {
            ...Store,
            counter: Store.counter - Number(action.payload.num)
        }
    }
    else if(action.type === "PRIVATE")
    {
        newCounterStore = 
        {
            ...Store,
            private_toggle: !Store.private_toggle
        }
    }
    return newCounterStore
}

const counterStore = createStore(counterRuducer);

export default counterStore;
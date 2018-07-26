export default function (state= null, action) {
    switch (action.type) {
        case 'TRAINER_SELECTED':
            // logic for returning one trainer
            //let newState=data.filter((trainer)=>trainer.id == action.payload.id);
           // return newState;
            return action.payload;            
    }
    return state;
}
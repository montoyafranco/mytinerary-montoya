const initialState = {
    activities:[],
    aux:[],
    
}

const activitiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetchActivities':

            return {
                ...state,
                activities: action.payload,
                aux: action.payload,
                filterCities: action.payload
            }

      
        

            
        case "filterActivitiesForItinerary":
            let retorno = action.payload
            console.log(action.payload)
            
            return{
                ...state,
                activities:retorno
            }
         

        default:
            return state
    }


}
export default activitiesReducer
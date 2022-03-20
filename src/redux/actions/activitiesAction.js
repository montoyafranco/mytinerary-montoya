import axios from 'axios';

const activitiesAction = {

    fetchearActivity: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allactivities')
            dispatch({type:'fetchActivities', payload:res.data.response.activities})
       }
    },
    
    
   
   
    filtActivityForItinerary: (id) =>{

        return async(dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/allactivities/itinerary/${id}`)
            dispatch({type: "filterActivitiesForItinerary", payload:res.data.respuesta})
        }
    }





}

export default activitiesAction;
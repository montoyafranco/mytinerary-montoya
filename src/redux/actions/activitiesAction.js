import axios from 'axios';

const activitiesAction = {

    fetchearActivity: () =>{

       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allactivities/')
            dispatch({type:'fetchActivities', payload:res.data.response.activities})
       }
    },

    fetchearUnaActivity: (id) =>{
      console.log(id)
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/allactivities/"+id)
            console.log(res.data)
             dispatch({type:'fetchearUnaActivity', payload:res.data.response})

        }
        
    },

    filterActivityforItinerary: (id) => {

      return async (dispatch, getState) => {
        const res = await axios.get('http://localhost:4000/api/allactivities/itinerary/${id}')
        dispatch({ type: "filterActivitiesForItinerary", payload: res.data.respuesta })
      }
    },








}

export default activitiesAction;
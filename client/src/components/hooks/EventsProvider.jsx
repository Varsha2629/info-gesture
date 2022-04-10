import React, { useEffect, useState } from "react";
import axios from "axios";

export const EventsContext = React.createContext();

const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [searchActive, setSearchActive] = useState(false)
  const [location, setLocation] = useState("")
  

  const baseurl = process.env.REACT_APP_BASEURL;

  const search = () => {
      if(location === ''){
        setSearchResults([])
        return
      }
    const searchResults = events.filter(item => item.location.toLowerCase().includes(location.toLowerCase()))
    setSearchResults(searchResults)
    console.log('searchResult',searchResults );
    console.log('location',location );   

  }

  useEffect(() => {
      search()
      
  },[location])

  useEffect(() => {
    searchResults.length > 0 ? setSearchActive(true) : setSearchActive(false)
    console.log('searchResultsChange', searchResults)
  }, [searchResults])

  const getEvents = () => {
    axios.get(`${baseurl}/api/events`)
      .then((response) => {
        setEvents(response.data);
      });

  }

  const value = { events,  search, getEvents, searchResults, searchActive, setSearchResults,  location, setLocation}
  return (
    <EventsContext.Provider value={value}>
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsProvider;

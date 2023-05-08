import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./Community.module.css";
import Navbar from "../../Navigation/Navbar/Navbar";
import Sidebar from "../../Navigation/Sidebar/Sidebar";
import Search from "./communityAssets/search.svg";
import Toggle from "./communityAssets/toggle.svg";
import Tutors from "./Tutors";
import sOne from "./communityAssets/Ellipse 1 (3).svg";
// import sTwo from "./communityAssets/Ellipse 1 (1).svg";
import Students from "./Students";

export default function Community() {
  const [info, setInfo] = useState([]);
  // const [search, setSearch] = useState('');



  // useEffect(() => {
  //   async function getData(
  //     url = "https://stutern-citrone-app.onrender.com/api/v1/users/community"
  //   ) {
  //     const response = await fetch(url, {
  //       method: "GET", // *GET, POST, PUT, DELETE, etc.
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer " +
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQxM2JmNDQ3YWU4Y2UzZGE1NGRhZjYiLCJlbWFpbCI6ImF5b0BtYWlsLmNvbSIsImlhdCI6MTY4Mjk0NzI5MCwiZXhwIjoxNjgzMDMzNjkwfQ.SGpIpOoSg1n2S5d0bn06FdxKtlVWPP_ON4TbXXKbJwk",
  //       },
  //     });
  //     return response.json();
  //   }
  //   getData().then((data) => {
  //     let result = data.users;
  //     // let result = data.users[9].firstName
  //     setInfo(result);
  //     // console.log(result);
  //     // const request =  result.filter((value)=>{
  //     //   return value.track
  //     //  })
  //     //  console.log(request);
  //   });
  // }, []);
  //    const searchItems = (searchValue) => {
  //       setSearch(searchValue)
  //       if (search !== '') {
  //           const filteredData = info.filter((item) => {
  //               return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
  //           })
  //           setInfo(filteredData)
  //       }
  //       else{
  //           setInfo(info)
  //       }
       
  //   }
   

  return (
    // <>
    // {info.filter((value) => {
    //   return value.track;
    // }).map((item,i) => {
    //   {/* return item.firstName */}

    //     { return <Students firstName={item.firstName} lastName={item.lastName} track= {item.track}/>}

    // })}
    // </> 
    //Don't uncomment
    <Fragment>
      <Navbar />
      <Sidebar />
      <section className={classes.community}>
        <div className={classes.top}>
          <div className={classes.breadcrumbs}>
            <Link to="/dashboard">
              <span> Dashboard</span> &gt;{" "}
            </Link>
            <Link to="/community">
              <span className={classes.spanB}>Community </span>
            </Link>
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.input}>
              <img src={Search} alt="Logo" />
              <input type="text" placeholder="Search"  />
              {/* <input type="text" placeholder="Search" onChange={(e) =>searchItems(e.target.value)} /> */}
            
              {/* {console.log(search)} */}
            {/* ///insert code below here... */}
              
            </div>
            <img src={Toggle} alt="Logo" />
          </div>
        </div>
        <div className={classes.bottom}>
          <h1>Community</h1>

          <div className={classes.tutors}>
            <h2>Tutors</h2>
            <Tutors />
          </div>
          <div className={classes.students}>
            <h2>Students</h2>
            <Students />
            {/* {info
              .filter((value) => {
                return value.track;
              })
              .map((item, i) => {
                {
                  return (
                    <Students
                      firstName={item.firstName}
                      lastName={item.lastName}
                      track={item.track}
                      // picture={item.picture}
                    />
                  );
                }
              })} */}
            {/* <div>
        <Link to="#"  className= {classes.links}>
          <img src={sOne} alt="Logo" />
          <section>
          <p>Tolulope</p>
          <h4>UI/UX Design</h4>
          </section>
         
        </Link>
      </div>
      <div>
        <Link to="#" className= {classes.links}>
          <img src={sTwo} alt="Logo" />
          <section>
          <p>Jane Micheal</p>
          <h4>Frontend Dev</h4>
          </section>
         
        </Link>
      </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
// {info
//   .filter((value) => {
//     if (value.firstName === search.toString()){
//       return setInfo(value)
//     }
//     else {
//       {/* return setInfo */}
//     }
//   })
//   }